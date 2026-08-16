$ErrorActionPreference = "Stop"
Set-StrictMode -Version Latest

Add-Type -AssemblyName System.Drawing

$adDirectory = Split-Path -Parent $MyInvocation.MyCommand.Path
$sourceDirectory = Join-Path $adDirectory "source"

$ads = @(
    @{ Source = "01-custom-printing-built-to-show-up-source.png"; Output = "01-custom-printing-built-to-show-up-1080x1350.png" },
    @{ Source = "01b-custom-printing-person-led-source.png"; Output = "01b-custom-printing-person-led-1080x1350.png" },
    @{ Source = "02-big-order-bring-it-on-source.png"; Output = "02-big-order-bring-it-on-1080x1350.png" },
    @{ Source = "03-stickers-and-decals-source.png"; Output = "03-stickers-and-decals-1080x1350.png" }
)

foreach ($ad in $ads) {
    $sourcePath = Join-Path $sourceDirectory $ad.Source
    $outputPath = Join-Path $adDirectory $ad.Output
    $sourceImage = [System.Drawing.Image]::FromFile($sourcePath)
    $canvas = New-Object System.Drawing.Bitmap 1080, 1350
    $graphics = [System.Drawing.Graphics]::FromImage($canvas)

    try {
        $graphics.Clear([System.Drawing.ColorTranslator]::FromHtml("#151416"))
        $graphics.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
        $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
        $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
        $graphics.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality

        $scale = [Math]::Min(1080 / $sourceImage.Width, 1350 / $sourceImage.Height)
        $drawWidth = [int][Math]::Round($sourceImage.Width * $scale)
        $drawHeight = [int][Math]::Round($sourceImage.Height * $scale)
        $drawX = [int][Math]::Floor((1080 - $drawWidth) / 2)
        $drawY = [int][Math]::Floor((1350 - $drawHeight) / 2)

        $graphics.DrawImage($sourceImage, $drawX, $drawY, $drawWidth, $drawHeight)

        $cyanBrush = New-Object System.Drawing.SolidBrush ([System.Drawing.ColorTranslator]::FromHtml("#38c1d8"))
        $pinkBrush = New-Object System.Drawing.SolidBrush ([System.Drawing.ColorTranslator]::FromHtml("#f32385"))
        $yellowBrush = New-Object System.Drawing.SolidBrush ([System.Drawing.ColorTranslator]::FromHtml("#ffd118"))
        try {
            $graphics.FillRectangle($cyanBrush, 0, 0, 8, 450)
            $graphics.FillRectangle($pinkBrush, 0, 450, 8, 450)
            $graphics.FillRectangle($yellowBrush, 0, 900, 8, 450)
            $graphics.FillRectangle($yellowBrush, 1072, 0, 8, 450)
            $graphics.FillRectangle($pinkBrush, 1072, 450, 8, 450)
            $graphics.FillRectangle($cyanBrush, 1072, 900, 8, 450)
        }
        finally {
            $cyanBrush.Dispose()
            $pinkBrush.Dispose()
            $yellowBrush.Dispose()
        }

        $canvas.Save($outputPath, [System.Drawing.Imaging.ImageFormat]::Png)
    }
    finally {
        $graphics.Dispose()
        $canvas.Dispose()
        $sourceImage.Dispose()
    }
}
