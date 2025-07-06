# The Type Boy 40

This keyboard is a test bed for the revised TyepPak Advance microcontroller breakout board. It's a relatively simple 4x12 ortholinear keyboard.

## Features

- TypePak Advance cartridge slot
- VIK expansion port (Bottom mount, requires Type-B FPC cable.)
- Per-key SK6812Mini-E RGB LEDs
- Mid-Mount USB-C port
- Power switch
- Reset button

## Current Status

This board hasn't been built yet. Fab at your own risk!

## BOM

TBD

## Footprint Credits

- `diode-rear` is a variant of the stock Ergogen footprint which only has SMD pads on the rear.
- `esd` is a converted `SOT-23-6_Handsoldering` footprint from KiCAD's stock libraries.
- `fff_logo` is a logo I made. Features SMD pads as glasses.
- `gba` is a converted version of the DS Lite cartridge print from HDR's [Game-Boy-KiCAD-Library](https://github.com/HDR/Game-Boy-KiCad-Library) library.
- `jumper` is a converted KiCAD footprint.
- `led_sk6812mini-e` is from ceoloide's [ergogen-footprints](https://github.com/ceoloide/ergogen-footprints) library.
- `m2mountinghole` is converted from KiCAD.
- `power` is the stock Ergogen slide switch with Pad 3 exposed to allow you to specify which direction of the switch is "on".
- `smd805` is a converted KiCAD hand soldered 805 SMD component footprint.
- `usbcmid` is converted from Keeb.io's [Keebio-Parts.pretty](https://github.com/keebio/Keebio-Parts.pretty) library.
- `vik_cutout` is something I threw together in about 4 minutes.
- `vik_horizontal` and `vik_logo` come from sadekbaroudi's excellent [VIK](https://github.com/sadekbaroudi/vik) keyboard extension standard. Go Fingerpunch!