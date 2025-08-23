module.exports = {
  params: {
    designator: 'TH',
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

fp.push(`(footprint "vik-keyboard-throughole"`);
fp.push(`(at ${p.x} ${p.y} ${flipR(flip, p.r)})`);
fp.push(`(layer "${(flip ? "B.Cu" : "F.Cu")}")`);
fp.push(`(property "Reference" "${p.ref}" ${p.ref_hide} (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.SilkS") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);
fp.push(`(property "Value" "" hide (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.Fab") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);
fp.push(`(property "Datasheet" "" hide (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.Fab") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);
fp.push(`(property "Description" "" hide (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.Fab") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);

fp.push(`(attr smd)`);

// Unknown to kicad2ergogen
fp.push(`(embedded_fonts no)`);

// Pads
fp.push(`(pad "1" thru_hole circle (at -6.3 ${flipN(flip, -1.27)} ${flipR(flip, p.r + 0)}) (size 1.5 1.5) (drill 1.1) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.VIK1})`);
fp.push(`(pad "2" thru_hole rect (at -6.3 ${flipN(flip, 1.27)} ${flipR(flip, p.r + 0)}) (size 1.5 1.5) (drill 1.1) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.VIK2})`);
fp.push(`(pad "3" thru_hole circle (at -3.76 ${flipN(flip, -1.27)} ${flipR(flip, p.r + 0)}) (size 1.5 1.5) (drill 1.1) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.VIK3})`);
fp.push(`(pad "4" thru_hole circle (at -3.76 ${flipN(flip, 1.27)} ${flipR(flip, p.r + 0)}) (size 1.5 1.5) (drill 1.1) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.VIK4})`);
fp.push(`(pad "5" thru_hole circle (at -1.22 ${flipN(flip, -1.27)} ${flipR(flip, p.r + 0)}) (size 1.5 1.5) (drill 1.1) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.VIK5})`);
fp.push(`(pad "6" thru_hole circle (at -1.22 ${flipN(flip, 1.27)} ${flipR(flip, p.r + 0)}) (size 1.5 1.5) (drill 1.1) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.VIK6})`);
fp.push(`(pad "7" thru_hole circle (at 1.32 ${flipN(flip, -1.27)} ${flipR(flip, p.r + 0)}) (size 1.5 1.5) (drill 1.1) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.VIK7})`);
fp.push(`(pad "8" thru_hole circle (at 1.32 ${flipN(flip, 1.27)} ${flipR(flip, p.r + 0)}) (size 1.5 1.5) (drill 1.1) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.VIK8})`);
fp.push(`(pad "9" thru_hole circle (at 3.86 ${flipN(flip, -1.27)} ${flipR(flip, p.r + 0)}) (size 1.5 1.5) (drill 1.1) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.VIK9})`);
fp.push(`(pad "10" thru_hole circle (at 3.86 ${flipN(flip, 1.27)} ${flipR(flip, p.r + 0)}) (size 1.5 1.5) (drill 1.1) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.VIK10})`);
fp.push(`(pad "11" thru_hole circle (at 6.4 ${flipN(flip, -1.27)} ${flipR(flip, p.r + 0)}) (size 1.5 1.5) (drill 1.1) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.VIK11})`);
fp.push(`(pad "12" thru_hole circle (at 6.4 ${flipN(flip, 1.27)} ${flipR(flip, p.r + 0)}) (size 1.5 1.5) (drill 1.1) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.VIK12})`);

// Properties
// fp.push(`(property "Reference" "REF**" (at 1.08 ${flipN(flip, -0.5)} ${flipR(flip, p.r + 0) % 180}) (unlocked yes) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") (hide yes)  (effects (font (size 1 1) (thickness 0.15)) (justify${ flip ? " mirror" : ""})))`);
// fp.push(`(property "Value" "vik-keyboard-throughole" (at 2.16 ${flipN(flip, 1)} ${flipR(flip, p.r + 0) % 180}) (unlocked yes) (layer "${(flip ? "B.Fab" : "F.Fab")}") (hide yes)  (effects (font (size 1 1) (thickness 0.15)) (justify${ flip ? " mirror" : ""})))`);
// fp.push(`(property "Datasheet" "" (at 0 ${flipN(flip, 0)} ${flipR(flip, p.r + 0) % 180}) (layer "${(flip ? "B.Fab" : "F.Fab")}") (hide yes)  (effects (font (size 1.27 1.27) (thickness 0.15)) (justify${ flip ? " mirror" : ""})))`);
// fp.push(`(property "Description" "" (at 0 ${flipN(flip, 0)} ${flipR(flip, p.r + 0) % 180}) (layer "${(flip ? "B.Fab" : "F.Fab")}") (hide yes)  (effects (font (size 1.27 1.27) (thickness 0.15)) (justify${ flip ? " mirror" : ""})))`);

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

