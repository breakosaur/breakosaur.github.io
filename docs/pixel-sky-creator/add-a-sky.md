# Add a sky

To add a sky, do one of the following:
- Click the GameObject menu item and choose Pixel Sky Creator > Sky
- Right-click in the Hierarchy and choose GameObject > Pixel Sky Creator > Sky
- Drag the `Sky` prefab from the asset's Prefabs folder into the Hierarchy


## Default configuration

As seen in the Hierarchy, each sky comprises a `Sky` game object and two child game objects – `ColorBands` and `Dither`.

![Sky game object in the Hierarchy](/img/pixel-sky-creator/pixel-sky-creator-default-hierarchy.png)

The settings to edit the sky are contained within the `Sky` game object's `Sky (Script)` component.

![Sky (Script) component in the Inspector](/img/pixel-sky-creator/pixel-sky-creator-default-inspector.png)

By default, each `Sky` game object is positioned with its bottom-left corner at `0,0` and uses the following configuration:

| Section | Field and value | Description |
| --- | --- | --- |
| Dimensions (px) | Width: 960 | The sky's width in pixels. |
|                 | Height: 540 | The sky's height in pixels. |
| Colors (bottom --> top) | Colors: A fixed-step gradient with the colors magenta and blue | The sky's color bands, going from bottom (the left of the gradient) to top (the right of the gradient). |
| Dither | Dither Texture: dither-2px | The dither pattern which will be added to each color band. |
