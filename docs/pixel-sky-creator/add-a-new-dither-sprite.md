# Add a new dither sprite

Pixel Sky Creator supports the use of any sprite as a dither pattern, so long as the sprite's texture satisfies the following criteria:
- it must only contain pixels whose alpha value is either `0` (fully transparent) or `1` (fully opaque)
- its pixel data must be readable
- it must not be Crunch compressed


## How it works

Pixel Sky Creator essentially uses the dither sprite as a template. Pixel Sky Creator reads the pixel data from the source dither sprite and then generates a new sprite which repeats the pattern across the width and height of the sky. This process is therefore non-destructive and does not alter the source dither sprite.


## Import settings

When importing a new sprite to use as a dither pattern (or editing an existing sprite), it is necessary to ensure that the `Read/Write` setting is `Checked` (that is, displaying a checkmark). This enables the pixel data to be read.

For reference, the pre-made dither sprites which ship with Pixel Sky Creator use the following import settings:

![Dither texture import settings](/img/pixel-sky-creator/pixel-sky-creator-dither-import.png)
