module.exports = {
  params: {
    designator: 'XX',
    side: 'F',
    VIK1: { type: 'net', value: 'V33' },
    VIK2: { type: 'net', value: 'GND' },
    VIK3: { type: 'net', value: 'SDA' },
    VIK4: { type: 'net', value: 'SCL' },
    VIK5: { type: 'net', value: 'RGB_OUT' },
    VIK6: { type: 'net', value: 'V5' },
    VIK7: { type: 'net', value: 'VIK_GPIO1' },
    VIK8: { type: 'net', value: 'MOSI' },
    VIK9: { type: 'net', value: 'VIK_GPIO2' },
    VIK10: { type: 'net', value: 'VIK_CS' },
    VIK11: { type: 'net', value: 'MISO' },
    VIK12: { type: 'net', value: 'SCK' }
  },
  body: p => {
    const fp = [];
    const flip = p.side === "B";
if (!flip && p.side !== "F") throw new Error('unsupported side: ' + p.side);

fp.push(`(footprint "vik-keyboard-connector-horizontal"`);
fp.push(p.at);
fp.push(`(layer "${(flip ? "B.Cu" : "F.Cu")}")`);
fp.push(`(property "Reference" "${p.ref}" ${p.ref_hide} (at 0 0 ${p.r}) (layer "${p.side}.SilkS") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);

fp.push(`(attr smd)`);

// Pads
fp.push(`(pad "1" smd rect (at -2.75 -2.038 ${p.r}) (size 0.28 1.25) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Paste" "${(flip ? "B" : "F")}.Mask")  ${p.VIK1})`);
fp.push(`(pad "2" smd rect (at -2.25 -2.038 ${p.r}) (size 0.28 1.25) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Paste" "${(flip ? "B" : "F")}.Mask")  ${p.VIK2})`);
fp.push(`(pad "3" smd rect (at -1.75 -2.038 ${p.r}) (size 0.28 1.25) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Paste" "${(flip ? "B" : "F")}.Mask")  ${p.VIK3})`);
fp.push(`(pad "4" smd rect (at -1.25 -2.038 ${p.r}) (size 0.28 1.25) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Paste" "${(flip ? "B" : "F")}.Mask")  ${p.VIK4})`);
fp.push(`(pad "5" smd rect (at -0.75 -2.038 ${p.r}) (size 0.28 1.25) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Paste" "${(flip ? "B" : "F")}.Mask")  ${p.VIK5})`);
fp.push(`(pad "6" smd rect (at -0.25 -2.038 ${p.r}) (size 0.28 1.25) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Paste" "${(flip ? "B" : "F")}.Mask")  ${p.VIK6})`);
fp.push(`(pad "7" smd rect (at 0.25 -2.038 ${p.r}) (size 0.28 1.25) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Paste" "${(flip ? "B" : "F")}.Mask")  ${p.VIK7})`);
fp.push(`(pad "8" smd rect (at 0.75 -2.038 ${p.r}) (size 0.28 1.25) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Paste" "${(flip ? "B" : "F")}.Mask")  ${p.VIK8})`);
fp.push(`(pad "9" smd rect (at 1.25 -2.038 ${p.r}) (size 0.28 1.25) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Paste" "${(flip ? "B" : "F")}.Mask")  ${p.VIK9})`);
fp.push(`(pad "10" smd rect (at 1.75 -2.038 ${p.r}) (size 0.28 1.25) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Paste" "${(flip ? "B" : "F")}.Mask")  ${p.VIK10})`);
fp.push(`(pad "11" smd rect (at 2.25 -2.038 ${p.r}) (size 0.28 1.25) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Paste" "${(flip ? "B" : "F")}.Mask")  ${p.VIK11})`);
fp.push(`(pad "12" smd rect (at 2.75 -2.038 ${p.r}) (size 0.28 1.25) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Paste" "${(flip ? "B" : "F")}.Mask")  ${p.VIK12})`);
fp.push(`(pad "NP" smd rect (at 4.55 0.686 ${p.r}) (size 1.8 2) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Paste" "${(flip ? "B" : "F")}.Mask"))`);
fp.push(`(pad "NP" smd rect (at -4.55 0.686 ${p.r}) (size 1.8 2) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Paste" "${(flip ? "B" : "F")}.Mask"))`);

// Drawings on User.2
fp.push(`(fp_text user "C479750" (at 0 0.75 ${p.r}) (layer "User.2") (effects (font (size 1 1) (thickness 0.15)) (justify${ flip ? " mirror" : ""})) )`);

// Drawings on F.Fab
//fp.push(`(fp_text value "vik-keyboard-connector-horizontal" (at ${(flip ? -0.05 : 0.05)} 5.09 ${flip ? (p.r) % 360 : (p.r) % 360}) (layer "${(flip ? "B.Fab" : "F.Fab")}") (effects (font (size 1 1) (thickness 0.15)) (justify${ flip ? " mirror" : ""})) )`);

// Drawings on F.SilkS
//fp.push(`(fp_text reference "REF**" (at ${(flip ? -4.25 : 4.25)} -3.5 ${flip ? (p.r) % 360 : (p.r) % 360}) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") hide (effects (font (size 1 1) (thickness 0.15)) (justify${ flip ? " mirror" : ""})) )`);
fp.push(`(fp_text user "3v3" (at ${(flip ? -5.0 : -5.0)} -2.7 ${flip ? (p.r) % 360 : (p.r) % 360}) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") (effects (font (size 0.75 0.75) (thickness 0.15)) (justify bottom ${ flip ? " mirror" : ""})) )`);
fp.push(`(fp_text user "VIK OUT" (at 0 -3.48 ${flip ? (p.r) % 360 : (p.r) % 360}) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") (effects (font (size 1 1) (thickness 0.15)) (justify bottom ${ flip ? " mirror" : ""})) )`);
fp.push(`(fp_line (start ${(flip ? 5.5 : -5.5)} -2.2) (end ${(flip ? 3.131 : -3.131)} -2.2) (stroke (width 0.254) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start ${(flip ? 5.5 : -5.5)} -0.539) (end ${(flip ? 5.5 : -5.5)} -2.2) (stroke (width 0.254) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start ${(flip ? 5.5 : -5.5)} 4.295) (end ${(flip ? 5.5 : -5.5)} 1.912) (stroke (width 0.254) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start ${(flip ? -5.5 : 5.5)} -2.2) (end ${(flip ? -3.131 : 3.131)} -2.2) (stroke (width 0.254) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start ${(flip ? -5.5 : 5.5)} -0.539) (end ${(flip ? -5.5 : 5.5)} -2.2) (stroke (width 0.254) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start ${(flip ? -5.5 : 5.5)} 4.295) (end ${(flip ? 5.5 : -5.5)} 4.295) (stroke (width 0.254) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start ${(flip ? -5.5 : 5.5)} 4.295) (end ${(flip ? -5.5 : 5.5)} 1.912) (stroke (width 0.254) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_circle (center ${(flip ? -3.429 : -3.429)} -2.708) (end ${(flip ? -3.302 : -3.302)} -2.708) (stroke (width 0.254) (type solid)) (fill none) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);

// Drawings on Cmts.User
fp.push(`(fp_line (start ${(flip ? 3.5 : -3.5)} 2) (end ${(flip ? 3.5 : -3.5)} 4.5) (stroke (width 0.12) (type default)) (layer "Cmts.User") )`);
fp.push(`(fp_line (start ${(flip ? -3.5 : 3.5)} 2) (end ${(flip ? -3.5 : 3.5)} 4.5) (stroke (width 0.12) (type default)) (layer "Cmts.User") )`);

// 3D Models
fp.push(`(model "../../kicad/3dmodels/vik-connector-horizontal.stp" (offset (xyz -2.75 2.3 0)) (scale (xyz 1 1 1)) (rotate (xyz 0 0 0)))`);

    fp.push(')');
    return fp.join('\n');
  }
}

