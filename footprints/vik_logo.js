module.exports = {
  params: {
    designator: 'XX',
    side: 'F',

  },
  body: p => {
    const fp = [];
    const flip = p.side === "B";
if (!flip && p.side !== "F") throw new Error('unsupported side: ' + p.side);

fp.push(`(footprint "vik-logo-small"`);
fp.push(p.at);
//fp.push(`(layer "${(flip ? "B.Cu" : "F.Cu")}")`);
//fp.push(`(property "Reference" "${p.ref}" ${p.ref_hide} (at 0 0 ${p.r}) (layer "${p.side}.SilkS") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);

fp.push(`(attr smd)`);

// Unknown to kicad2ergogen

// Drawings on User.1
//fp.push(`(fp_text reference "REF**" (at ${(flip ? -0.18 : 0.18)} -3.29 ${flip ? (p.r) % 360 : (p.r) % 360}) (layer "User.1") (effects (font (size 1 1) (thickness 0.15)) (justify${ flip ? " mirror" : ""})) )`);

// Drawings on F.Fab
//fp.push(`(fp_text value "vik-logo-small" (at ${(flip ? -0.05 : 0.05)} 4.33 ${flip ? (p.r) % 360 : (p.r) % 360}) (layer "${(flip ? "B.Fab" : "F.Fab")}") (effects (font (size 1 1) (thickness 0.15)) (justify${ flip ? " mirror" : ""})) )`);
//fp.push(`(fp_text user "\${REFERENCE}" (at ${(flip ? -0.4 : 0.4)} 0.21 ${flip ? (p.r) % 360 : (p.r) % 360}) (layer "${(flip ? "B.Fab" : "F.Fab")}") (effects (font (size 1 1) (thickness 0.15)) (justify${ flip ? " mirror" : ""})) )`);

// Drawings on F.SilkS
fp.push(`(fp_line (start ${(flip ? -2.869715 : 2.869715)} -1.793686) (end ${(flip ? -2.375449 : 2.375449)} -0.938393) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") (width 0.1) )`);
fp.push(`(fp_line (start ${(flip ? -0.000114 : 0.000114)} 3.195112) (end ${(flip ? 0.493459 : -0.493459)} 2.339419) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") (width 0.1) )`);
fp.push(`(fp_line (start ${(flip ? 2.383804 : -2.383804)} -1.52) (end ${(flip ? -2.38 : 2.38)} -1.52) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") (width 0.1) )`);
fp.push(`(fp_line (start ${(flip ? -2.38 : 2.38)} -1.52) (end ${(flip ? 0.001902 : -0.001902)} 2.605575) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") (width 0.1) )`);
fp.push(`(fp_line (start ${(flip ? -1.064084 : 1.064084)} 1.351662) (end ${(flip ? -0.000114 : 0.000114)} 3.195112) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") (width 0.1) )`);
fp.push(`(fp_line (start ${(flip ? 0.001902 : -0.001902)} 2.605575) (end ${(flip ? 2.383804 : -2.383804)} -1.52) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") (width 0.1) )`);
fp.push(`(fp_line (start ${(flip ? -0.741256 : 0.741256)} -1.793386) (end ${(flip ? -2.869715 : 2.869715)} -1.793686) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") (width 0.1) )`);
fp.push(`(fp_line (start ${(flip ? 2.880161 : -2.880161)} -1.806346) (end ${(flip ? 1.892323 : -1.892323)} -1.805976) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") (width 0.1) )`);
fp.push(`(fp_line (start ${(flip ? 1.815689 : -1.815689)} 0.036813) (end ${(flip ? 2.880161 : -2.880161)} -1.806346) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") (width 0.1) )`);

    fp.push(')');
    return fp.join('\n');
  }
}

