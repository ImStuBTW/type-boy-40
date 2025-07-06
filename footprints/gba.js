// Reversible Game Boy Advance Cartridge Slot
// Based of HDR's Game-Boy-KiCad-Library DS Lite Footprint
// https://github.com/HDR/Game-Boy-KiCad-Library
// Pin Definitions based off of the TypePak PCB.
// https://github.com/ImStuBTW/TypePak

module.exports = {
  params: {
    designator: 'MCU',
    orientation: 'up',
    VBUS:      {type: 'net', value: 'VBUS'},
    DATMIN:    {type: 'net', value: 'DATMIN'},
    DATPLUS:   {type: 'net', value: 'DATPLUS'},
    GND:       {type: 'net', value: 'GND'},
    RESET:     {type: 'net', value: 'RESET'},
    KB_GPIO1:  {type: 'net', value: 'KB_GPIO1'},
    KB_GPIO2:  {type: 'net', value: 'KB_GPIO2'},
    KB_GPIO3:  {type: 'net', value: 'KB_GPIO3'},
    KB_GPIO4:  {type: 'net', value: 'KB_GPIO4'},
    KB_GPIO5:  {type: 'net', value: 'KB_GPIO5'},
    KB_GPIO6:  {type: 'net', value: 'KB_GPIO6'},
    KB_GPIO7:  {type: 'net', value: 'KB_GPIO7'},
    KB_GPIO8:  {type: 'net', value: 'KB_GPIO8'},
    KB_GPIO9:  {type: 'net', value: 'KB_GPIO9'},
    KB_GPIO10: {type: 'net', value: 'KB_GPIO10'},
    KB_GPIO11: {type: 'net', value: 'KB_GPIO11'},
    KB_GPIO12: {type: 'net', value: 'KB_GPIO12'},
    KB_GPIO13: {type: 'net', value: 'KB_GPIO13'},
    KB_GPIO14: {type: 'net', value: 'KB_GPIO14'},
    SCK:       {type: 'net', value: 'SCK'},
    MISO:      {type: 'net', value: 'MISO'},
    VIK_CS:    {type: 'net', value: 'VIK_CS'},
    MOSI:      {type: 'net', value: 'MOSI'},
    VIK_GPIO2: {type: 'net', value: 'VIK_GPIO2'},
    MOSI:      {type: 'net', value: 'MOSI'},
    VIK_GPIO1: {type: 'net', value: 'VIK_GPIO1'},
    RGB_OUT:   {type: 'net', value: 'RGB_OUT'},
    SCL:       {type: 'net', value: 'SCL'},
    SDA:       {type: 'net', value: 'SDA'},
    V33_TOGG:  {type: 'net', value: 'V33_TOGG'},
    V33_ALWAYS:{type: 'net', value: 'V33_ALWAYS'},
    VBAT:      {type: 'net', value: 'VBAT'},
    BAT_OUT:   {type: 'net', value: 'BAT_OUT'}
  },
  body: p => `
    (module Custom:GBA_Reversible_Cart_Reader (layer F.Cu) (tedit 5CF930D9)

    ${p.at /*Parametric Position */}
    (fp_rect (start 28.5 -11.75) (end -28.5 4.125) (stroke (width 0.1) (type default)) (fill no) (layer "Dwgs.User") )

    ${'' /* Mounting Holes */}
    (pad "" np_thru_hole circle (at -12.93204 -2.04724 ${p.rot}) (size 2 2) (drill 2) (layers *.Cu *.Mask))
    (pad "" np_thru_hole circle (at 12.93204 -2.04724 ${p.rot}) (size 2 2) (drill 2) (layers *.Cu *.Mask))

    ${'' /* GND Pads */}
    (pad NP smd rect (at 12.68204 -12.9208 ${p.rot}) (size 4.5 2) (layers F.Cu F.Paste F.Mask))
    (pad NP smd rect (at -12.68204 -12.9208 ${p.rot}) (size 4.5 2) (layers F.Cu F.Paste F.Mask))

    ${'' /* Top Pads */}
    (pad 1 smd rect (at -23.25 5.75 ${p.rot}) (size 1 2.5) (layers F.Cu F.Paste F.Mask) ${p.VBUS.str})
    (pad 2 smd rect (at -21.75 5.75 ${p.rot}) (size 1 2.5) (layers F.Cu F.Paste F.Mask) ${p.DATMIN.str})
    (pad 3 smd rect (at -20.25 5.75 ${p.rot}) (size 1 2.5) (layers F.Cu F.Paste F.Mask) ${p.DATPLUS.str})
    (pad 4 smd rect (at -18.75 5.75 ${p.rot}) (size 1 2.5) (layers F.Cu F.Paste F.Mask) ${p.GND.str})
    (pad 5 smd rect (at -17.25 5.75 ${p.rot}) (size 1 2.5) (layers F.Cu F.Paste F.Mask) ${p.RESET.str})
    (pad 6 smd rect (at -15.75 5.75 ${p.rot}) (size 1 2.5) (layers F.Cu F.Paste F.Mask) ${p.KB_GPIO1.str})
    (pad 7 smd rect (at -14.25 5.75 ${p.rot}) (size 1 2.5) (layers F.Cu F.Paste F.Mask) ${p.KB_GPIO2.str})
    (pad 8 smd rect (at -12.75 5.75 ${p.rot}) (size 1 2.5) (layers F.Cu F.Paste F.Mask) ${p.KB_GPIO3.str})
    (pad 9 smd rect (at -11.25 5.75 ${p.rot}) (size 1 2.5) (layers F.Cu F.Paste F.Mask) ${p.KB_GPIO4.str})
    (pad 10 smd rect (at -9.75 5.75 ${p.rot}) (size 1 2.5) (layers F.Cu F.Paste F.Mask) ${p.KB_GPIO5.str})
    (pad 11 smd rect (at -8.25 5.75 ${p.rot}) (size 1 2.5) (layers F.Cu F.Paste F.Mask) ${p.KB_GPIO6.str})
    (pad 12 smd rect (at -6.75 5.75 ${p.rot}) (size 1 2.5) (layers F.Cu F.Paste F.Mask) ${p.KB_GPIO7.str})
    (pad 13 smd rect (at -5.25 5.75 ${p.rot}) (size 1 2.5) (layers F.Cu F.Paste F.Mask) ${p.KB_GPIO8.str})
    (pad 14 smd rect (at -3.75 5.75 ${p.rot}) (size 1 2.5) (layers F.Cu F.Paste F.Mask) ${p.KB_GPIO9.str})
    (pad 15 smd rect (at -2.25 5.75 ${p.rot}) (size 1 2.5) (layers F.Cu F.Paste F.Mask) ${p.KB_GPIO10.str})
    (pad 16 smd rect (at -0.75 5.75 ${p.rot}) (size 1 2.5) (layers F.Cu F.Paste F.Mask) ${p.KB_GPIO11.str})
    (pad 17 smd rect (at 0.75 5.75 ${p.rot}) (size 1 2.5) (layers F.Cu F.Paste F.Mask) ${p.KB_GPIO12.str})
    (pad 18 smd rect (at 2.25 5.75 ${p.rot}) (size 1 2.5) (layers F.Cu F.Paste F.Mask) ${p.KB_GPIO13.str})
    (pad 19 smd rect (at 3.75 5.75 ${p.rot}) (size 1 2.5) (layers F.Cu F.Paste F.Mask) ${p.KB_GPIO14.str})
    (pad 20 smd rect (at 5.25 5.75 ${p.rot}) (size 1 2.5) (layers F.Cu F.Paste F.Mask) ${p.SCK.str})
    (pad 21 smd rect (at 6.75 5.75 ${p.rot}) (size 1 2.5) (layers F.Cu F.Paste F.Mask) ${p.MISO.str})
    (pad 22 smd rect (at 8.25 5.75 ${p.rot}) (size 1 2.5) (layers F.Cu F.Paste F.Mask) ${p.VIK_CS.str})
    (pad 23 smd rect (at 9.75 5.75 ${p.rot}) (size 1 2.5) (layers F.Cu F.Paste F.Mask) ${p.VIK_GPIO2.str})
    (pad 24 smd rect (at 11.25 5.75 ${p.rot}) (size 1 2.5) (layers F.Cu F.Paste F.Mask) ${p.MOSI.str})
    (pad 25 smd rect (at 12.75 5.75 ${p.rot}) (size 1 2.5) (layers F.Cu F.Paste F.Mask) ${p.VIK_GPIO1.str})
    (pad 26 smd rect (at 14.25 5.75 ${p.rot}) (size 1 2.5) (layers F.Cu F.Paste F.Mask) ${p.RGB_OUT.str})
    (pad 27 smd rect (at 15.75 5.75 ${p.rot}) (size 1 2.5) (layers F.Cu F.Paste F.Mask) ${p.SCL.str})
    (pad 28 smd rect (at 17.25 5.75 ${p.rot}) (size 1 2.5) (layers F.Cu F.Paste F.Mask) ${p.SDA.str})
    (pad 29 smd rect (at 18.75 5.75 ${p.rot}) (size 1 2.5) (layers F.Cu F.Paste F.Mask) ${p.V33_TOGG.str})
    (pad 30 smd rect (at 20.25 5.75 ${p.rot}) (size 1 2.5) (layers F.Cu F.Paste F.Mask) ${p.V33_ALWAYS.str})
    (pad 31 smd rect (at 21.75 5.75 ${p.rot}) (size 1 2.5) (layers F.Cu F.Paste F.Mask) ${p.VBAT.str})
    (pad 32 smd rect (at 23.25 5.75 ${p.rot}) (size 1 2.5) (layers F.Cu F.Paste F.Mask) ${p.BAT_OUT.str})
  )`
}