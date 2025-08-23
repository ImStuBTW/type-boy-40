module.exports = {
  params: {
    designator: 'XX',
    side: 'F',
    from: { type: 'net', value: undefined },
    to: { type: 'net', value: undefined },
  },
  body: p => {
    const fp = [];
    const flip = p.side === "B";
if (!flip && p.side !== "F") throw new Error('unsupported side: ' + p.side);

fp.push(`(footprint "SolderJumper-2_from.3mm_Open_RoundedPad1.0x1.5mm"`);
fp.push(`(at ${p.x} ${p.y} ${flipR(flip, p.r)})`);
fp.push(`(layer "${(flip ? "B.Cu" : "F.Cu")}")`);
fp.push(`(property "Reference" "${p.ref}" ${p.ref_hide} (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.SilkS") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);
fp.push(`(property "Value" "" hide (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.Fab") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);
fp.push(`(property "Datasheet" "" hide (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.Fab") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);
fp.push(`(property "Description" "" hide (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.Fab") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);

fp.push(`(descr "SMD Solder Jumper, 1x1.5mm, rounded Pads, 0.3mm gap, open")`);
fp.push(`(tags "solder jumper open")`);
fp.push(`(attr exclude_from_pos_files exclude_from_bom allow_soldermask_bridges)`);

// Pads
fp.push(`(pad "1" smd custom (at -0.65 ${flipN(flip, 0)} ${flipR(flip, p.r + 0)}) (size 1 0.5) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask") (zone_connect 2) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_circle (center 0 ${flipN(flip, 0.25)}) (end 0.5 ${flipN(flip, 0.25)}) (width 0) (fill yes)) (gr_circle (center 0 ${flipN(flip, -0.25)}) (end 0.5 ${flipN(flip, -0.25)}) (width 0) (fill yes)) (gr_poly (pts (xy 0.5 ${flipN(flip, 0.75)}) (xy 0 ${flipN(flip, 0.75)}) (xy 0 ${flipN(flip, -0.75)}) (xy 0.5 ${flipN(flip, -0.75)})) (width 0) (fill yes)))  ${p.from})`);
fp.push(`(pad "2" smd custom (at 0.65 ${flipN(flip, 0)} ${flipR(flip, p.r + 0)}) (size 1 0.5) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask") (zone_connect 2) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_circle (center 0 ${flipN(flip, 0.25)}) (end 0.5 ${flipN(flip, 0.25)}) (width 0) (fill yes)) (gr_circle (center 0 ${flipN(flip, -0.25)}) (end 0.5 ${flipN(flip, -0.25)}) (width 0) (fill yes)) (gr_poly (pts (xy 0 ${flipN(flip, 0.75)}) (xy -0.5 ${flipN(flip, 0.75)}) (xy -0.5 ${flipN(flip, -0.75)}) (xy 0 ${flipN(flip, -0.75)})) (width 0) (fill yes)))  ${p.to})`);

// Drawings on F.CrtYd
fp.push(`(fp_line (start -1.65 ${flipN(flip, -1.25)}) (end -1.65 ${flipN(flip, 1.25)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") )`);
fp.push(`(fp_line (start -1.65 ${flipN(flip, -1.25)}) (end 1.65 ${flipN(flip, -1.25)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") )`);
fp.push(`(fp_line (start 1.65 ${flipN(flip, 1.25)}) (end -1.65 ${flipN(flip, 1.25)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") )`);
fp.push(`(fp_line (start 1.65 ${flipN(flip, 1.25)}) (end 1.65 ${flipN(flip, -1.25)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") )`);

// Drawings on F.Mask
fp.push(`(fp_rect (start -0.15 ${flipN(flip, -0.75)}) (end 0.15 ${flipN(flip, 0.75)}) (stroke (width 0) (type default)) (fill yes) (layer "${(flip ? "B.Mask" : "F.Mask")}") )`);

// Drawings on F.SilkS
fp.push(`(fp_line (start -1.4 ${flipN(flip, 0.3)}) (end -1.4 ${flipN(flip, -0.3)}) (stroke (width 0.12) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start -0.7 ${flipN(flip, -1)}) (end 0.7 ${flipN(flip, -1)}) (stroke (width 0.12) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start 0.7 ${flipN(flip, 1)}) (end -0.7 ${flipN(flip, 1)}) (stroke (width 0.12) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start 1.4 ${flipN(flip, -0.3)}) (end 1.4 ${flipN(flip, 0.3)}) (stroke (width 0.12) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_arc (start -1.4 ${flipN(flip, -0.3)}) (mid -1.194975 ${flipN(flip, -0.794975)}) (end -0.7 ${flipN(flip, -1)}) (stroke (width 0.12) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_arc (start -0.7 ${flipN(flip, 1)}) (mid -1.194975 ${flipN(flip, 0.794975)}) (end -1.4 ${flipN(flip, 0.3)}) (stroke (width 0.12) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_arc (start 0.7 ${flipN(flip, -1)}) (mid 1.194975 ${flipN(flip, -0.794975)}) (end 1.4 ${flipN(flip, -0.3)}) (stroke (width 0.12) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_arc (start 1.4 ${flipN(flip, 0.3)}) (mid 1.194975 ${flipN(flip, 0.794975)}) (end 0.7 ${flipN(flip, 1)}) (stroke (width 0.12) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);

// Properties
// fp.push(`(property "Reference" "VBUS" (at 0 ${flipN(flip, -2)} ${flipR(flip, p.r + 180) % 180}) (layer "${(flip ? "B.SilkS" : "F.SilkS")}")  (effects (font (size 0.75 0.75) (thickness 0.15)) (justify${ flip ? " mirror" : ""})))`);
// fp.push(`(property "Value" "SolderJumper-2_from.3mm_Open_RoundedPad1.0x1.5mm" (at 0 ${flipN(flip, 1.9)} ${flipR(flip, p.r + 180) % 180}) (layer "${(flip ? "B.Fab" : "F.Fab")}") (hide yes)  (effects (font (size 1 1) (thickness 0.15)) (justify${ flip ? " mirror" : ""})))`);
// fp.push(`(property "Datasheet" "" (at 0 ${flipN(flip, 0)} ${flipR(flip, p.r + 0) % 180}) (unlocked yes) (layer "${(flip ? "B.Fab" : "F.Fab")}") (hide yes)  (effects (font (size 1.27 1.27) (thickness 0.15)) (justify${ flip ? " mirror" : ""})))`);
// fp.push(`(property "Description" "" (at 0 ${flipN(flip, 0)} ${flipR(flip, p.r + 0) % 180}) (unlocked yes) (layer "${(flip ? "B.Fab" : "F.Fab")}") (hide yes)  (effects (font (size 1.27 1.27) (thickness 0.15)) (justify${ flip ? " mirror" : ""})))`);

    fp.push(')');
    return fp.join('\n');
  }
}
function normalizeAngle(angle) {
  angle = angle % 360;
  if (angle <= -180) angle += 360;
  else if (angle > 180) angle -= 360;
  return angle;
}
function flipR(flip, r) { return normalizeAngle(flip ? (180 - r) : r) }
function flipN(flip, n) { return flip ? -n : n }

