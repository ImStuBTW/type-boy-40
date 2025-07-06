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

    // Drawings on Edge.Cuts
    fp.push(`(fp_line (start ${(flip ? 6.5 : -6.5)} -0.5) (end ${(flip ? -6.5 : 6.5)} -0.5) (stroke (width 0.05) (type default)) (layer "Edge.Cuts") )`);
    fp.push(`(fp_line (start ${(flip ? 6.5 : -6.5)} 0.5) (end ${(flip ? -6.5 : 6.5)} 0.5) (stroke (width 0.05) (type default)) (layer "Edge.Cuts") )`);
    fp.push(`(fp_arc (start ${(flip ? 6.5 : -6.5)} 0.5) (mid ${(flip ? 7 : -7)} 0) (end ${(flip ? 6.5 : -6.5)} -0.5) (stroke (width 0.05) (type default)) (layer "Edge.Cuts") )`);
    fp.push(`(fp_arc (start ${(flip ? -6.5 : 6.5)} -0.5) (mid ${(flip ? -7 : 7)} 0) (end ${(flip ? -6.5 : 6.5)} 0.5) (stroke (width 0.05) (type default)) (layer "Edge.Cuts") )`);

    // Properties
    // fp.push(`(property "Reference" "REF**" (at 0 -0.5 ${flip ? (p.r - 0) % 360 : (p.r + 0) % 360}) (unlocked yes) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") (hide yes)  (effects (font (size 1 1) (thickness 0.1)) (justify${ flip ? " mirror" : ""})))`);
    // fp.push(`(property "Value" "Untitled" (at 0 1 ${flip ? (p.r - 0) % 360 : (p.r + 0) % 360}) (unlocked yes) (layer "${(flip ? "B.Fab" : "F.Fab")}") (hide yes)  (effects (font (size 1 1) (thickness 0.15)) (justify${ flip ? " mirror" : ""})))`);
    // fp.push(`(property "Datasheet" "" (at 0 0 ${flip ? (p.r - 0) % 360 : (p.r + 0) % 360}) (unlocked yes) (layer "${(flip ? "B.Fab" : "F.Fab")}") (hide yes)  (effects (font (size 1 1) (thickness 0.15)) (justify${ flip ? " mirror" : ""})))`);
    // fp.push(`(property "Description" "" (at 0 0 ${flip ? (p.r - 0) % 360 : (p.r + 0) % 360}) (unlocked yes) (layer "${(flip ? "B.Fab" : "F.Fab")}") (hide yes)  (effects (font (size 1 1) (thickness 0.15)) (justify${ flip ? " mirror" : ""})))`);

    fp.push(')');
    return fp.join('\n');
  }
}

