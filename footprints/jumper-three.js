module.exports = {
  params: {
    designator: 'XX',
    side: 'F',
    default: { type: 'net', value: undefined },
    out: { type: 'net', value: undefined },
    alt: { type: 'net', value: undefined },
  },
  body: p => {
    const fp = [];
    const flip = p.side === "B";
if (!flip && p.side !== "F") throw new Error('unsupported side: ' + p.side);

fp.push(`(footprint "SolderJumper-3_default.3mm_Bridged12_RoundedPad1.0x1.5mm"`);
fp.push(p.at);
fp.push(`(layer "${(flip ? "B.Cu" : "F.Cu")}")`);
fp.push(`(property "Reference" "${p.ref}" ${p.ref_hide} (at 0 0 ${p.r}) (layer "${p.side}.SilkS") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);

fp.push(`(descr "SMD Solder 3-pad Jumper, 1x1.5mm rounded Pads, 0.3mm gap, pads 1-2 bridged with 1 copper strip")`);
fp.push(`(tags "net tie solder jumper bridged")`);
fp.push(`(attr exclude_from_pos_files exclude_from_bom allow_soldermask_bridges)`);

// Unknown to kicad2ergogen
fp.push(`(zone_connect 1)`);
fp.push(`(net_tie_pad_groups "1,2")`);
fp.push(`(embedded_fonts no)`);

// Pads
fp.push(`(pad "1" smd custom (at ${(flip ? 1.3 : -1.3)} 0 ${p.r}) (size 1 0.5) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask") (zone_connect 2) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_circle (center ${(flip ? -0 : 0)} 0.25) (end ${(flip ? -0.5 : 0.5)} 0.25) (width 0) (fill yes)) (gr_circle (center ${(flip ? -0 : 0)} -0.25) (end ${(flip ? -0.5 : 0.5)} -0.25) (width 0) (fill yes)) (gr_poly (pts (xy ${(flip ? -0.55 : 0.55)} 0.75) (xy ${(flip ? -0 : 0)} 0.75) (xy ${(flip ? -0 : 0)} -0.75) (xy ${(flip ? -0.55 : 0.55)} -0.75)) (width 0) (fill yes)))  ${p.default})`);
fp.push(`(pad "2" smd rect (at 0 0 ${p.r}) (size 1 1.5) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask")  ${p.out})`);
fp.push(`(pad "3" smd custom (at ${(flip ? -1.3 : 1.3)} 0 ${p.r}) (size 1 0.5) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask") (zone_connect 2) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_circle (center ${(flip ? -0 : 0)} 0.25) (end ${(flip ? -0.5 : 0.5)} 0.25) (width 0) (fill yes)) (gr_circle (center ${(flip ? -0 : 0)} -0.25) (end ${(flip ? -0.5 : 0.5)} -0.25) (width 0) (fill yes)) (gr_poly (pts (xy ${(flip ? -0 : 0)} 0.75) (xy ${(flip ? 0.55 : -0.55)} 0.75) (xy ${(flip ? 0.55 : -0.55)} -0.75) (xy ${(flip ? -0 : 0)} -0.75)) (width 0) (fill yes)))  ${p.alt})`);

// Drawings on F.CrtYd
fp.push(`(fp_line (start ${(flip ? 2.3 : -2.3)} -1.25) (end ${(flip ? 2.3 : -2.3)} 1.25) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") )`);
fp.push(`(fp_line (start ${(flip ? 2.3 : -2.3)} -1.25) (end ${(flip ? -2.3 : 2.3)} -1.25) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") )`);
fp.push(`(fp_line (start ${(flip ? -2.3 : 2.3)} 1.25) (end ${(flip ? 2.3 : -2.3)} 1.25) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") )`);
fp.push(`(fp_line (start ${(flip ? -2.3 : 2.3)} 1.25) (end ${(flip ? -2.3 : 2.3)} -1.25) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") )`);

// Drawings on F.Cu
fp.push(`(fp_poly (pts (xy ${(flip ? 0.9 : -0.9)} -0.3) (xy ${(flip ? 0.4 : -0.4)} -0.3) (xy ${(flip ? 0.4 : -0.4)} 0.3) (xy ${(flip ? 0.9 : -0.9)} 0.3)) (stroke (width 0) (type solid)) (fill yes) (layer "${(flip ? "B.Cu" : "F.Cu")}") )`);

// Drawings on F.Mask
fp.push(`(fp_rect (start ${(flip ? 0.75 : -0.75)} -0.75) (end ${(flip ? -0.75 : 0.75)} 0.75) (stroke (width 0) (type default)) (fill yes) (layer "${(flip ? "B.Mask" : "F.Mask")}") )`);

// Drawings on F.SilkS
fp.push(`(fp_line (start ${(flip ? 2.05 : -2.05)} 0.3) (end ${(flip ? 2.05 : -2.05)} -0.3) (stroke (width 0.12) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start ${(flip ? 1.5 : -1.5)} 1.5) (end ${(flip ? 0.9 : -0.9)} 1.5) (stroke (width 0.12) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start ${(flip ? 1.4 : -1.4)} -1) (end ${(flip ? -1.4 : 1.4)} -1) (stroke (width 0.12) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start ${(flip ? 1.2 : -1.2)} 1.2) (end ${(flip ? 1.5 : -1.5)} 1.5) (stroke (width 0.12) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start ${(flip ? 1.2 : -1.2)} 1.2) (end ${(flip ? 0.9 : -0.9)} 1.5) (stroke (width 0.12) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start ${(flip ? -1.4 : 1.4)} 1) (end ${(flip ? 1.4 : -1.4)} 1) (stroke (width 0.12) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start ${(flip ? -2.05 : 2.05)} -0.3) (end ${(flip ? -2.05 : 2.05)} 0.3) (stroke (width 0.12) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_arc (start ${(flip ? 2.05 : -2.05)} -0.3) (mid ${(flip ? 1.844975 : -1.844975)} -0.794975) (end ${(flip ? 1.35 : -1.35)} -1) (stroke (width 0.12) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_arc (start ${(flip ? 1.35 : -1.35)} 1) (mid ${(flip ? 1.844975 : -1.844975)} 0.794975) (end ${(flip ? 2.05 : -2.05)} 0.3) (stroke (width 0.12) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_arc (start ${(flip ? -1.35 : 1.35)} -1) (mid ${(flip ? -1.844975 : 1.844975)} -0.794975) (end ${(flip ? -2.05 : 2.05)} -0.3) (stroke (width 0.12) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_arc (start ${(flip ? -2.05 : 2.05)} 0.3) (mid ${(flip ? -1.844975 : 1.844975)} 0.794975) (end ${(flip ? -1.35 : 1.35)} 1) (stroke (width 0.12) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);

// Properties
// fp.push(`(property "Reference" "REF**" (at 0 -1.8 ${flip ? (p.r - 180) % 360 : (p.r + 180) % 360}) (layer "${(flip ? "B.SilkS" : "F.SilkS")}")  (effects (font (size 1 1) (thickness 0.15)) (justify${ flip ? " mirror" : ""})))`);
// fp.push(`(property "Value" "SolderJumper-3_default.3mm_Bridged12_RoundedPad1.0x1.5mm" (at 0 1.9 ${flip ? (p.r - 180) % 360 : (p.r + 180) % 360}) (layer "${(flip ? "B.Fab" : "F.Fab")}")  (effects (font (size 1 1) (thickness 0.15)) (justify${ flip ? " mirror" : ""})))`);
// fp.push(`(property "Datasheet" "" (at 0 0 ${flip ? (p.r - 0) % 360 : (p.r + 0) % 360}) (unlocked yes) (layer "${(flip ? "B.Fab" : "F.Fab")}") (hide yes)  (effects (font (size 1.27 1.27) (thickness 0.15)) (justify${ flip ? " mirror" : ""})))`);
// fp.push(`(property "Description" "" (at 0 0 ${flip ? (p.r - 0) % 360 : (p.r + 0) % 360}) (unlocked yes) (layer "${(flip ? "B.Fab" : "F.Fab")}") (hide yes)  (effects (font (size 1.27 1.27) (thickness 0.15)) (justify${ flip ? " mirror" : ""})))`);

    fp.push(')');
    return fp.join('\n');
  }
}

