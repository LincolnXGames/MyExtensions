const { abs, min, max, round, floor, sqrt } = Math;

const toDec = (hex) => parseInt(hex, 16);
const toHex = (dec) => dec.toString(16);
const getRGB = (chn, clr) => clr.slice(chn*2-1, chn*2+1);
const addHex = (hex1, hex2) => toHex(toDec(hex1) + toDec(hex2));
const subHex = (hex1, hex2) => toHex(toDec(hex1) - toDec(hex2));
const mulHex = (hex1, hex2) => toHex(toDec(hex1) * toDec(hex2));
const divHex = (hex1, hex2) => toHex(toDec(hex1) / toDec(hex2));
const roundHex = (hex) => toHex(round(toDec(hex1)));
const limitHex = (hex, mi, ma) => toHex(min(max(toDec(hex), mi), ma));
const fixHex = (hex) => limitHex(hex, 0, 255).padStart(2, '0');
const toFixHex = (dec) => fixHex(dec.toString(16));
const additiveHex = (hex1, hex2) => fixHex(addHex(hex1, hex2));
const subtractiveHex = (hex1, hex2) => fixHex(subHex(hex1, hex2));
const multiplicativeHex = (hex1, hex2) => toFixHex(((toDec(hex1) / 255) * (toDec(hex2) / 255)) * 255);
const divisingHex = (hex1, hex2) => toFixHex(((toDec(hex1) / 255) / (toDec(hex2) / 255)) * 255);
const differenceHex = (hex1, hex2) => toFixHex(abs(toDec(hex1) - toDec(hex2)));
const screenHex = (hex1, hex2) => toFixHex((1 - (1 - toDec(hex1) / 255) * (1 - toDec(hex2) / 255)) * 255);

function overlayHex(hex1, hex2) {
  let a = toDec(hex1) / 255;
  let b = toDec(hex2) / 255;
  let overlay;
  if (a < 0.5) {
    overlay = 2 * a * b;
  } else {
    overlay = 1 - (2 * (1 - a) * (1 - b));
  }
  return toFixHex(overlay * 255)
}

function hsvToRgb(h, s, v) {
    h /= 360;
    s /= 100;
    v /= 100;
    var r, g, b, i, f, p, q, t;
    if (arguments.length === 1) {
        s = h.s, v = h.v, h = h.h;
    }
    i = floor(h * 6);
    f = h * 6 - i;
    p = v * (1 - s);
    q = v * (1 - f * s);
    t = v * (1 - (1 - f) * s);
    switch (i % 6) {
        case 0: r = v, g = t, b = p; break;
        case 1: r = q, g = v, b = p; break;
        case 2: r = p, g = v, b = t; break;
        case 3: r = p, g = q, b = v; break;
        case 4: r = t, g = p, b = v; break;
        case 5: r = v, g = p, b = q; break;
    }
    return {
        r: round(r * 255),
        g: round(g * 255),
        b: round(b * 255)
    };
}

function hslToRgb(h, s, l) {
  h /= 360;
  s /= 100;
  l /= 100;
  let r, g, b;

  if (s === 0) {
    r = g = b = l; // achromatic
  } else {
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    r = hueToRgb(p, q, h + 1/3);
    g = hueToRgb(p, q, h);
    b = hueToRgb(p, q, h - 1/3);
  }

  return {r: round(r * 255), g: round(g * 255), b: round(b * 255)};
}

function hueToRgb(p, q, t) {
  if (t < 0) t += 1;
  if (t > 1) t -= 1;
  if (t < 1/6) return p + (q - p) * 6 * t;
  if (t < 1/2) return q;
  if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
  return p;
}

(function(Scratch) {
  'use strict';
  
  const spectrumIcon = "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI1NS42NTIwNCIgaGVpZ2h0PSI1NS42NTIwNCIgdmlld0JveD0iMCwwLDU1LjY1MjA0LDU1LjY1MjA0Ij48ZGVmcz48bGluZWFyR3JhZGllbnQgeDE9IjI0Mi4wNjU4NSIgeTE9IjE1Mi4zNjgwMSIgeDI9IjIzNy45MzQxOSIgeTI9IjIwNy42MzE5OSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJjb2xvci0xIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiMzMzNhZmYiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMzMzNhZmYiIHN0b3Atb3BhY2l0eT0iMCIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IHgxPSIyMTIuMzY4MDIiIHkxPSIxNzcuOTM0MTciIHgyPSIyNjcuNjMxOTkiIHkyPSIxODIuMDY1ODMiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0iY29sb3ItMiI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjMzZmZjMzIiBzdG9wLW9wYWNpdHk9IjAuNzAxOTYiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMzNmZmMzMiIHN0b3Atb3BhY2l0eT0iMCIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yMTIuMTc0LC0xNTIuMTczOTgpIj48ZyBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiPjxwYXRoIGQ9Ik0yMTIuMjkwOTEsMTgwYzAsLTE1LjMwMzMyIDEyLjQwNTc5LC0yNy43MDkxMSAyNy43MDkxMSwtMjcuNzA5MTFjMTUuMzAzMzIsMCAyNy43MDkxMSwxMi40MDU3OSAyNy43MDkxMSwyNy43MDkxMWMwLDE1LjMwMzMyIC0xMi40MDU3OSwyNy43MDkxMSAtMjcuNzA5MTEsMjcuNzA5MTFjLTE1LjMwMzMyLDAgLTI3LjcwOTExLC0xMi40MDU3OSAtMjcuNzA5MTEsLTI3LjcwOTExeiIgZmlsbD0iI2ZmMzMzMyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9Ik5hTiIvPjxwYXRoIGQ9Ik0yMTIuMzY4MDMsMTc3LjkzNDE3YzEuMTQwOTMsLTE1LjI2MDczIDE0LjQzNzEsLTI2LjcwNzA5IDI5LjY5NzgyLC0yNS41NjYxNmMxNS4yNjA3MywxLjE0MDkzIDI2LjcwNzA5LDE0LjQzNzEgMjUuNTY2MTYsMjkuNjk3ODJjLTEuMTQwOTMsMTUuMjYwNzMgLTE0LjQzNzEsMjYuNzA3MDkgLTI5LjY5NzgyLDI1LjU2NjE2Yy0xNS4yNjA3MywtMS4xNDA5MyAtMjYuNzA3MDksLTE0LjQzNzEgLTI1LjU2NjE2LC0yOS42OTc4MnoiIGZpbGw9InVybCgjY29sb3ItMSkiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSJOYU4iLz48cGF0aCBkPSJNMjM3LjkzNDE5LDIwNy42MzJjLTE1LjI2MDcyLC0xLjE0MDkzIC0yNi43MDcwOSwtMTQuNDM3MSAtMjUuNTY2MTYsLTI5LjY5NzgzYzEuMTQwOTMsLTE1LjI2MDczIDE0LjQzNzEsLTI2LjcwNzA5IDI5LjY5NzgzLC0yNS41NjYxN2MxNS4yNjA3MywxLjE0MDkzIDI2LjcwNzA5LDE0LjQzNzEgMjUuNTY2MTYsMjkuNjk3ODNjLTEuMTQwOTMsMTUuMjYwNzMgLTE0LjQzNzEsMjYuNzA3MDkgLTI5LjY5NzgzLDI1LjU2NjE3eiIgZmlsbD0idXJsKCNjb2xvci0yKSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9Ik5hTiIvPjxwYXRoIGQ9Ik0yMTMuNDI0LDE4MGMwLC0xNC42Nzc1MyAxMS44OTg0OSwtMjYuNTc2MDIgMjYuNTc2MDIsLTI2LjU3NjAyYzE0LjY3NzUzLDAgMjYuNTc2MDIsMTEuODk4NDkgMjYuNTc2MDIsMjYuNTc2MDJjMCwxNC42Nzc1MyAtMTEuODk4NDksMjYuNTc2MDIgLTI2LjU3NjAyLDI2LjU3NjAyYy0xNC42Nzc1MywwIC0yNi41NzYwMiwtMTEuODk4NDkgLTI2LjU3NjAyLC0yNi41NzYwMnoiIGZpbGw9Im5vbmUiIHN0cm9rZS1vcGFjaXR5PSIwLjQ0MzE0IiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMi41Ii8+PC9nPjwvZz48L3N2Zz4=";
  const blockIcon = "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIxNi41ODk4NSIgaGVpZ2h0PSIxNi41ODk4NSIgdmlld0JveD0iMCwwLDE2LjU4OTg1LDE2LjU4OTg1Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjMxLjcwNTA4LC0xNzEuNzA1MDYpIj48ZyBzdHJva2Utd2lkdGg9IjAuNjI1IiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiPjxwYXRoIGQ9Ik0yMzIuMDQ1LDE4M2MwLC0yLjQ4NTI4IDIuMDE0NzIsLTQuNSA0LjUsLTQuNWMyLjQ4NTI4LDAgNC41LDIuMDE0NzIgNC41LDQuNWMwLDIuNDg1MjggLTIuMDE0NzIsNC41IC00LjUsNC41Yy0yLjQ4NTI4LDAgLTQuNSwtMi4wMTQ3MiAtNC41LC00LjV6IiBmaWxsPSIjNGM5N2ZmIiBzdHJva2U9IiMzMzczY2MiLz48cGF0aCBkPSJNMjQwLjA0NSwxNzIuNWMyLjQ4NTI4LDAgNC41LDIuMDE0NzIgNC41LDQuNWMwLDIuNDg1MjggLTIuMDE0NzIsNC41IC00LjUsNC41Yy0yLjQ4NTI4LDAgLTQuNSwtMi4wMTQ3MiAtNC41LC00LjVjMCwtMi40ODUyOCAyLjAxNDcyLC00LjUgNC41LC00LjV6IiBmaWxsPSIjZmY2NjgwIiBzdHJva2U9IiNmZjMzNTUiLz48cGF0aCBkPSJNMjQzLjQ1NSwxNzguNWMyLjQ4NTI4LDAgNC41LDIuMDE0NzIgNC41LDQuNWMwLDIuNDg1MjggLTIuMDE0NzIsNC41IC00LjUsNC41Yy0yLjQ4NTI4LDAgLTQuNSwtMi4wMTQ3MiAtNC41LC00LjVjMCwtMi40ODUyOCAyLjAxNDcyLC00LjUgNC41LC00LjV6IiBmaWxsPSIjZmZiZjAwIiBzdHJva2U9IiNjYzk5MDAiLz48cGF0aCBkPSJNMjMxLjcwNTA5LDE4OC4yOTQ5MnYtMTYuNTg5ODVoMTYuNTg5ODV2MTYuNTg5ODV6IiBmaWxsPSJub25lIiBzdHJva2U9Im5vbmUiLz48cGF0aCBkPSJNMjQzLjQ1NSwxNzguNWMyLjQ4NTI4LDAgNC41LDIuMDE0NzIgNC41LDQuNWMwLDIuNDg1MjggLTIuMDE0NzIsNC41IC00LjUsNC41Yy0yLjQ4NTI4LDAgLTQuNSwtMi4wMTQ3MiAtNC41LC00LjVjMCwtMi40ODUyOCAyLjAxNDcyLC00LjUgNC41LC00LjV6IiBmaWxsLW9wYWNpdHk9IjAuNTAxOTYiIGZpbGw9IiNmZmJmMDAiIHN0cm9rZS1vcGFjaXR5PSIwLjUwMTk2IiBzdHJva2U9IiNjYzk5MDAiLz48cGF0aCBkPSJNMjMyLjA0NSwxODNjMCwtMi40ODUyOCAyLjAxNDcyLC00LjUgNC41LC00LjVjMi40ODUyOCwwIDQuNSwyLjAxNDcyIDQuNSw0LjVjMCwyLjQ4NTI4IC0yLjAxNDcyLDQuNSAtNC41LDQuNWMtMi40ODUyOCwwIC00LjUsLTIuMDE0NzIgLTQuNSwtNC41eiIgZmlsbC1vcGFjaXR5PSIwLjUwMTk2IiBmaWxsPSIjNGQ5N2ZmIiBzdHJva2Utb3BhY2l0eT0iMC41MDE5NiIgc3Ryb2tlPSIjMzM3M2NjIi8+PHBhdGggZD0iTTI0MC4wNDUsMTcyLjVjMi40ODUyOCwwIDQuNSwyLjAxNDcyIDQuNSw0LjVjMCwyLjQ4NTI4IC0yLjAxNDcyLDQuNSAtNC41LDQuNWMtMi40ODUyOCwwIC00LjUsLTIuMDE0NzIgLTQuNSwtNC41YzAsLTIuNDg1MjggMi4wMTQ3MiwtNC41IDQuNSwtNC41eiIgZmlsbC1vcGFjaXR5PSIwLjUwMTk2IiBmaWxsPSIjZmY2NjgwIiBzdHJva2Utb3BhY2l0eT0iMC41MDE5NiIgc3Ryb2tlPSIjZmYzMzU1Ii8+PC9nPjwvZz48L3N2Zz48IS0tcm90YXRpb25DZW50ZXI6OC4yOTQ5MTUwMDAwMDAwMDM6OC4yOTQ5MzUwMDAwMDAwMS0tPg==";
  class Colors {
    getInfo() {
      return {
        id: 'lxColors',
        name: 'Colors',
        color1: '#f94c97',
        menuIconURI: blockIcon,
        blocks: [
          {
            opcode: 'newColor',
            blockType: Scratch.BlockType.REPORTER,
            text: 'new color [COL]',
            arguments: {
              COL: {
                type: Scratch.ArgumentType.COLOR,
                defaultValue: '#a45eff'
              }
            }
          },
          {
            opcode: 'newColorRGB',
            blockType: Scratch.BlockType.REPORTER,
            text: 'from RGB [R] [G] [B]',
            arguments: {
              R: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '164'
              },
              G: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '94'
              },
              B: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '255'
              }
            }
          },
          {
            opcode: 'newColorHSV',
            blockType: Scratch.BlockType.REPORTER,
            text: 'from HSV [H] [S] [V]',
            arguments: {
              H: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '266'
              },
              S: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '63'
              },
              V: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '100'
              }
            }
          },
          {
            opcode: 'newColorHSL',
            blockType: Scratch.BlockType.REPORTER,
            text: 'from HSL [H] [S] [L]',
            arguments: {
              H: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '266'
              },
              S: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '100'
              },
              L: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '68'
              }
            }
          },
          '---',
          {
            opcode: 'randomColor',
            blockType: Scratch.BlockType.REPORTER,
            text: 'random color',
            disableMonitor: true
          },
          '---',
          {
            opcode: 'additiveBlend',
            blockType: Scratch.BlockType.REPORTER,
            text: '[COL1] + [COL2]',
            arguments: {
              COL1: {
                type: Scratch.ArgumentType.COLOR,
                defaultValue: '#a45eff'
              },
              COL2: {
                type: Scratch.ArgumentType.COLOR,
                defaultValue: '#eb57ab'
              }
            }
          },
          {
            opcode: 'subtractiveBlend',
            blockType: Scratch.BlockType.REPORTER,
            text: '[COL1] - [COL2]',
            arguments: {
              COL1: {
                type: Scratch.ArgumentType.COLOR,
                defaultValue: '#a45eff'
              },
              COL2: {
                type: Scratch.ArgumentType.COLOR,
                defaultValue: '#eb57ab'
              }
            }
          },
          {
            opcode: 'multiplicativeBlend',
            blockType: Scratch.BlockType.REPORTER,
            text: '[COL1] * [COL2]',
            arguments: {
              COL1: {
                type: Scratch.ArgumentType.COLOR,
                defaultValue: '#a45eff'
              },
              COL2: {
                type: Scratch.ArgumentType.COLOR,
                defaultValue: '#eb57ab'
              }
            }
          },
          {
            opcode: 'divisingBlend',
            blockType: Scratch.BlockType.REPORTER,
            text: '[COL1] / [COL2]',
            arguments: {
              COL1: {
                type: Scratch.ArgumentType.COLOR,
                defaultValue: '#a45eff'
              },
              COL2: {
                type: Scratch.ArgumentType.COLOR,
                defaultValue: '#eb57ab'
              }
            }
          },
          '---',
          {
            opcode: 'differenceBlend',
            blockType: Scratch.BlockType.REPORTER,
            text: 'difference of [COL1] - [COL2]',
            arguments: {
              COL1: {
                type: Scratch.ArgumentType.COLOR,
                defaultValue: '#a45eff'
              },
              COL2: {
                type: Scratch.ArgumentType.COLOR,
                defaultValue: '#eb57ab'
              }
            }
          },
          {
            opcode: 'screenBlend',
            blockType: Scratch.BlockType.REPORTER,
            text: 'screen [COL1] * [COL2]',
            arguments: {
              COL1: {
                type: Scratch.ArgumentType.COLOR,
                defaultValue: '#a45eff'
              },
              COL2: {
                type: Scratch.ArgumentType.COLOR,
                defaultValue: '#eb57ab'
              }
            }
          },
          {
            opcode: 'overlayBlend',
            blockType: Scratch.BlockType.REPORTER,
            text: 'overlay [COL1] * [COL2]',
            arguments: {
              COL1: {
                type: Scratch.ArgumentType.COLOR,
                defaultValue: '#a45eff'
              },
              COL2: {
                type: Scratch.ArgumentType.COLOR,
                defaultValue: '#eb57ab'
              }
            }
          }
        ]
      };
    }
    newColor(args) {
      return args.COL;
    }
    newColorRGB(args) {
      return '#' + toFixHex(args.R) + toFixHex(args.G) + toFixHex(args.B);
    }
    newColorHSV(args) {
      let convRGB = hsvToRgb(args.H, args.S, args.V);
      return '#' + toFixHex(convRGB.r) + toFixHex(convRGB.g) + toFixHex(convRGB.b);
    }
    newColorHSL(args) {
      let convRGB = hslToRgb(args.H, args.S, args.L);
      return '#' + toFixHex(convRGB.r) + toFixHex(convRGB.g) + toFixHex(convRGB.b);
    }
    randomColor() {
      return '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16).padStart(6, '0');
    }
    additiveBlend(args) {
      let newR = additiveHex(getRGB(1, args.COL1), getRGB(1, args.COL2));
      let newG = additiveHex(getRGB(2, args.COL1), getRGB(2, args.COL2));
      let newB = additiveHex(getRGB(3, args.COL1), getRGB(3, args.COL2));
      return '#' + newR + newG + newB;
    }
    subtractiveBlend(args) {
      let newR = subtractiveHex(getRGB(1, args.COL1), getRGB(1, args.COL2));
      let newG = subtractiveHex(getRGB(2, args.COL1), getRGB(2, args.COL2));
      let newB = subtractiveHex(getRGB(3, args.COL1), getRGB(3, args.COL2));
      return '#' + newR + newG + newB;
    }
    multiplicativeBlend(args) {
      let newR = multiplicativeHex(getRGB(1, args.COL1), getRGB(1, args.COL2));
      let newG = multiplicativeHex(getRGB(2, args.COL1), getRGB(2, args.COL2));
      let newB = multiplicativeHex(getRGB(3, args.COL1), getRGB(3, args.COL2));
      return '#' + newR + newG + newB;
    }
    divisingBlend(args) {
      let newR = divisingHex(getRGB(1, args.COL1), getRGB(1, args.COL2));
      let newG = divisingHex(getRGB(2, args.COL1), getRGB(2, args.COL2));
      let newB = divisingHex(getRGB(3, args.COL1), getRGB(3, args.COL2));
      return '#' + newR + newG + newB;
    }
    differenceBlend(args) {
      let newR = differenceHex(getRGB(1, args.COL1), getRGB(1, args.COL2));
      let newG = differenceHex(getRGB(2, args.COL1), getRGB(2, args.COL2));
      let newB = differenceHex(getRGB(3, args.COL1), getRGB(3, args.COL2));
      return '#' + newR + newG + newB;
    }
    screenBlend(args) {
      let newR = screenHex(getRGB(1, args.COL1), getRGB(1, args.COL2));
      let newG = screenHex(getRGB(2, args.COL1), getRGB(2, args.COL2));
      let newB = screenHex(getRGB(3, args.COL1), getRGB(3, args.COL2));
      return '#' + newR + newG + newB;
    }
    overlayBlend(args) {
      let newR = overlayHex(getRGB(1, args.COL1), getRGB(1, args.COL2));
      let newG = overlayHex(getRGB(2, args.COL1), getRGB(2, args.COL2));
      let newB = overlayHex(getRGB(3, args.COL1), getRGB(3, args.COL2));
      return '#' + newR + newG + newB;
    }
  }
  Scratch.extensions.register(new Colors());
})(Scratch);
