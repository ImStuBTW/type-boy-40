module.exports = {
  params: {
    designator: 'XX',
    side: 'F',

  },
  body: p => {
    const fp = [];
    const flip = p.side === "B";
    if (!flip && p.side !== "F") throw new Error('unsupported side: ' + p.side);

    fp.push(`(footprint "Untitled"`);
    fp.push(p.at);
    fp.push(`(layer "${(flip ? "B.Cu" : "F.Cu")}")`);
    fp.push(`(property "Reference" "${p.ref}" ${p.ref_hide} (at 0 0 ${p.r}) (layer "${p.side}.SilkS") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);

    fp.push(`(attr smd)`);

    // Unknown to kicad2ergogen
    fp.push(`(embedded_fonts no)`);

    // Drawings on F.Cu
    fp.push(`(fp_poly (pts (xy ${(flip ? 1.5 : -1.5)} -0.75) (xy ${(flip ? 0.25 : -0.25)} -0.75) (xy ${(flip ? 0.25 : -0.25)} 0) (xy ${(flip ? 1.5 : -1.5)} 0)) (stroke (width 0.2) (type solid)) (fill yes) (layer "${(flip ? "B.Cu" : "F.Cu")}") )`);
    fp.push(`(fp_poly (pts (xy ${(flip ? -0.25 : 0.25)} 0) (xy ${(flip ? -0.25 : 0.25)} -0.75) (xy ${(flip ? -1.5 : 1.5)} -0.75) (xy ${(flip ? -1.5 : 1.5)} 0)) (stroke (width 0.2) (type solid)) (fill yes) (layer "${(flip ? "B.Cu" : "F.Cu")}") )`);

    // Drawings on F.Mask
    fp.push(`(fp_poly (pts (xy ${(flip ? 0.25 : -0.25)} -0.75) (xy ${(flip ? 0.25 : -0.25)} 0) (xy ${(flip ? 1.5 : -1.5)} 0) (xy ${(flip ? 1.5 : -1.5)} -0.75)) (stroke (width 0.1) (type solid)) (fill yes) (layer "${(flip ? "B.Mask" : "F.Mask")}") )`);
    fp.push(`(fp_poly (pts (xy ${(flip ? -0.25 : 0.25)} -0.75) (xy ${(flip ? -1.5 : 1.5)} -0.75) (xy ${(flip ? -1.5 : 1.5)} 0) (xy ${(flip ? -0.25 : 0.25)} 0)) (stroke (width 0.1) (type solid)) (fill yes) (layer "${(flip ? "B.Mask" : "F.Mask")}") )`);

    // Drawings on F.SilkS
    fp.push(`(fp_line (start ${(flip ? 2.500011 : -2.500011)} -0.000008) (end ${(flip ? 0.000001 : -0.000001)} 2.499994) (stroke (width 0.15) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
    fp.push(`(fp_line (start ${(flip ? 1.25 : -1.25)} -2.500006) (end ${(flip ? 2.500011 : -2.500011)} -0.000008) (stroke (width 0.15) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
    fp.push(`(fp_line (start ${(flip ? 1.000001 : -1.000001)} 1.499991) (end ${(flip ? 0.000001 : -0.000001)} 2.499994) (stroke (width 0.15) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
    fp.push(`(fp_line (start ${(flip ? 0.000007 : -0.000007)} -1.250006) (end ${(flip ? 1.25 : -1.25)} -2.500006) (stroke (width 0.15) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
    fp.push(`(fp_line (start ${(flip ? 0.000001 : -0.000001)} 2.499994) (end ${(flip ? -0.999997 : 0.999997)} 1.499992) (stroke (width 0.15) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
    fp.push(`(fp_line (start ${(flip ? 0.000001 : -0.000001)} 2.499994) (end ${(flip ? -2.5 : 2.5)} -0.000006) (stroke (width 0.15) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
    fp.push(`(fp_line (start ${(flip ? -0.999997 : 0.999997)} 1.499992) (end ${(flip ? 1.000001 : -1.000001)} 1.499991) (stroke (width 0.15) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
    fp.push(`(fp_line (start ${(flip ? -1.25 : 1.25)} -2.5) (end ${(flip ? 0.000007 : -0.000007)} -1.250006) (stroke (width 0.15) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
    fp.push(`(fp_line (start ${(flip ? -2.5 : 2.5)} -0.000006) (end ${(flip ? -1.25 : 1.25)} -2.5) (stroke (width 0.15) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
    fp.push(`(fp_poly (pts (xy ${(flip ? 1 : -1)} 1.5) (xy ${(flip ? -0.999997 : 0.999997)} 1.499992) (xy ${(flip ? 0.000001 : -0.000001)} 2.499994)) (stroke (width 0.12) (type solid)) (fill yes) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
    fp.push(`(fp_poly (pts (xy ${(flip ? 0.25 : -0.25)} -0.5) (xy ${(flip ? -0.25 : 0.25)} -0.5) (xy ${(flip ? -0.25 : 0.25)} -0.25) (xy ${(flip ? 0.25 : -0.25)} -0.25)) (stroke (width 0.12) (type solid)) (fill yes) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);

    // Properties
    // fp.push(`(property "Reference" "REF**" (at 0 -0.5 ${flip ? (p.r - 0) % 360 : (p.r + 0) % 360}) (unlocked yes) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") (hide yes)  (effects (font (size 1 1) (thickness 0.15)) (justify${ flip ? " mirror" : ""})))`);
    // fp.push(`(property "Value" "Untitled" (at 0 1 ${flip ? (p.r - 0) % 360 : (p.r + 0) % 360}) (unlocked yes) (layer "${(flip ? "B.Fab" : "F.Fab")}") (hide yes)  (effects (font (size 1 1) (thickness 0.15)) (justify${ flip ? " mirror" : ""})))`);
    // fp.push(`(property "Datasheet" "" (at 0 0 ${flip ? (p.r - 0) % 360 : (p.r + 0) % 360}) (unlocked yes) (layer "${(flip ? "B.Fab" : "F.Fab")}") (hide yes)  (effects (font (size 1 1) (thickness 0.15)) (justify${ flip ? " mirror" : ""})))`);
    // fp.push(`(property "Description" "" (at 0 0 ${flip ? (p.r - 0) % 360 : (p.r + 0) % 360}) (unlocked yes) (layer "${(flip ? "B.Fab" : "F.Fab")}") (hide yes)  (effects (font (size 1 1) (thickness 0.15)) (justify${ flip ? " mirror" : ""})))`);

    fp.push(')');
    return fp.join('\n');
  }
}

