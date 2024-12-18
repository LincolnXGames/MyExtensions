function operateHex(hex1, hex2, operation) {
  const num1 = parseInt(hex1, 16);
  const num2 = parseInt(hex2, 16);

  let result;

  switch (operation) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num1 / num2;
      break;
    case '^':
      result = num1 ** num2;
      break;
    case 'round':
      result = Math.round(num1);
      break;
  }

  return result.toString(16).toUpperCase();
}

function avgHex(num1, num2) {
  return operateHex(operateHex(operateHex(num1, num2, "+"), "2", "/"), "0", "round").toString(16).toUpperCase();
}

function grabRgb(color, rgb) {
  let result;
  
  switch (rgb) {
    case 'red':
      result = (color.charAt(1) + color.charAt(2)).toUpperCase();
      break;
    case 'green':
      result = (color.charAt(3) + color.charAt(4)).toUpperCase();
      break;
    case 'blue':
      result = (color.charAt(5) + color.charAt(6)).toUpperCase();
      break;
  }

  return result;
}

(function(Scratch) {
  'use strict';

  if (!Scratch.extensions.unsandboxed) {
    throw new Error('This Hello World example must run unsandboxed');
  }
  
  const bubbleIcon = "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI1NS42NTIwNCIgaGVpZ2h0PSI1NS42NTIwNCIgdmlld0JveD0iMCwwLDU1LjY1MjA0LDU1LjY1MjA0Ij48ZGVmcz48bGluZWFyR3JhZGllbnQgeDE9IjI0Mi4wNjU4NSIgeTE9IjE1Mi4zNjgwMSIgeDI9IjIzNy45MzQxOSIgeTI9IjIwNy42MzE5OSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJjb2xvci0xIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiMzMzNhZmYiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMzMzNhZmYiIHN0b3Atb3BhY2l0eT0iMCIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IHgxPSIyMTIuMzY4MDIiIHkxPSIxNzcuOTM0MTciIHgyPSIyNjcuNjMxOTkiIHkyPSIxODIuMDY1ODMiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0iY29sb3ItMiI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjMzZmZjMzIiBzdG9wLW9wYWNpdHk9IjAuNzAxOTYiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMzNmZmMzMiIHN0b3Atb3BhY2l0eT0iMCIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yMTIuMTc0LC0xNTIuMTczOTgpIj48ZyBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiPjxwYXRoIGQ9Ik0yMTIuMjkwOTEsMTgwYzAsLTE1LjMwMzMyIDEyLjQwNTc5LC0yNy43MDkxMSAyNy43MDkxMSwtMjcuNzA5MTFjMTUuMzAzMzIsMCAyNy43MDkxMSwxMi40MDU3OSAyNy43MDkxMSwyNy43MDkxMWMwLDE1LjMwMzMyIC0xMi40MDU3OSwyNy43MDkxMSAtMjcuNzA5MTEsMjcuNzA5MTFjLTE1LjMwMzMyLDAgLTI3LjcwOTExLC0xMi40MDU3OSAtMjcuNzA5MTEsLTI3LjcwOTExeiIgZmlsbD0iI2ZmMzMzMyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9Ik5hTiIvPjxwYXRoIGQ9Ik0yMTIuMzY4MDMsMTc3LjkzNDE3YzEuMTQwOTMsLTE1LjI2MDczIDE0LjQzNzEsLTI2LjcwNzA5IDI5LjY5NzgyLC0yNS41NjYxNmMxNS4yNjA3MywxLjE0MDkzIDI2LjcwNzA5LDE0LjQzNzEgMjUuNTY2MTYsMjkuNjk3ODJjLTEuMTQwOTMsMTUuMjYwNzMgLTE0LjQzNzEsMjYuNzA3MDkgLTI5LjY5NzgyLDI1LjU2NjE2Yy0xNS4yNjA3MywtMS4xNDA5MyAtMjYuNzA3MDksLTE0LjQzNzEgLTI1LjU2NjE2LC0yOS42OTc4MnoiIGZpbGw9InVybCgjY29sb3ItMSkiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSJOYU4iLz48cGF0aCBkPSJNMjM3LjkzNDE5LDIwNy42MzJjLTE1LjI2MDcyLC0xLjE0MDkzIC0yNi43MDcwOSwtMTQuNDM3MSAtMjUuNTY2MTYsLTI5LjY5NzgzYzEuMTQwOTMsLTE1LjI2MDczIDE0LjQzNzEsLTI2LjcwNzA5IDI5LjY5NzgzLC0yNS41NjYxN2MxNS4yNjA3MywxLjE0MDkzIDI2LjcwNzA5LDE0LjQzNzEgMjUuNTY2MTYsMjkuNjk3ODNjLTEuMTQwOTMsMTUuMjYwNzMgLTE0LjQzNzEsMjYuNzA3MDkgLTI5LjY5NzgzLDI1LjU2NjE3eiIgZmlsbD0idXJsKCNjb2xvci0yKSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9Ik5hTiIvPjxwYXRoIGQ9Ik0yMTMuNDI0LDE4MGMwLC0xNC42Nzc1MyAxMS44OTg0OSwtMjYuNTc2MDIgMjYuNTc2MDIsLTI2LjU3NjAyYzE0LjY3NzUzLDAgMjYuNTc2MDIsMTEuODk4NDkgMjYuNTc2MDIsMjYuNTc2MDJjMCwxNC42Nzc1MyAtMTEuODk4NDksMjYuNTc2MDIgLTI2LjU3NjAyLDI2LjU3NjAyYy0xNC42Nzc1MywwIC0yNi41NzYwMiwtMTEuODk4NDkgLTI2LjU3NjAyLC0yNi41NzYwMnoiIGZpbGw9Im5vbmUiIHN0cm9rZS1vcGFjaXR5PSIwLjQ0MzE0IiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMi41Ii8+PC9nPjwvZz48L3N2Zz4=";
  const blockIcon = "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIxNi41ODk4NSIgaGVpZ2h0PSIxNi41ODk4NSIgdmlld0JveD0iMCwwLDE2LjU4OTg1LDE2LjU4OTg1Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjMxLjcwNTA4LC0xNzEuNzA1MDYpIj48ZyBzdHJva2Utd2lkdGg9IjAuNjI1IiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiPjxwYXRoIGQ9Ik0yMzIuMDQ1LDE4M2MwLC0yLjQ4NTI4IDIuMDE0NzIsLTQuNSA0LjUsLTQuNWMyLjQ4NTI4LDAgNC41LDIuMDE0NzIgNC41LDQuNWMwLDIuNDg1MjggLTIuMDE0NzIsNC41IC00LjUsNC41Yy0yLjQ4NTI4LDAgLTQuNSwtMi4wMTQ3MiAtNC41LC00LjV6IiBmaWxsPSIjNGM5N2ZmIiBzdHJva2U9IiMzMzczY2MiLz48cGF0aCBkPSJNMjQwLjA0NSwxNzIuNWMyLjQ4NTI4LDAgNC41LDIuMDE0NzIgNC41LDQuNWMwLDIuNDg1MjggLTIuMDE0NzIsNC41IC00LjUsNC41Yy0yLjQ4NTI4LDAgLTQuNSwtMi4wMTQ3MiAtNC41LC00LjVjMCwtMi40ODUyOCAyLjAxNDcyLC00LjUgNC41LC00LjV6IiBmaWxsPSIjZmY2NjgwIiBzdHJva2U9IiNmZjMzNTUiLz48cGF0aCBkPSJNMjQzLjQ1NSwxNzguNWMyLjQ4NTI4LDAgNC41LDIuMDE0NzIgNC41LDQuNWMwLDIuNDg1MjggLTIuMDE0NzIsNC41IC00LjUsNC41Yy0yLjQ4NTI4LDAgLTQuNSwtMi4wMTQ3MiAtNC41LC00LjVjMCwtMi40ODUyOCAyLjAxNDcyLC00LjUgNC41LC00LjV6IiBmaWxsPSIjZmZiZjAwIiBzdHJva2U9IiNjYzk5MDAiLz48cGF0aCBkPSJNMjMxLjcwNTA5LDE4OC4yOTQ5MnYtMTYuNTg5ODVoMTYuNTg5ODV2MTYuNTg5ODV6IiBmaWxsPSJub25lIiBzdHJva2U9Im5vbmUiLz48cGF0aCBkPSJNMjQzLjQ1NSwxNzguNWMyLjQ4NTI4LDAgNC41LDIuMDE0NzIgNC41LDQuNWMwLDIuNDg1MjggLTIuMDE0NzIsNC41IC00LjUsNC41Yy0yLjQ4NTI4LDAgLTQuNSwtMi4wMTQ3MiAtNC41LC00LjVjMCwtMi40ODUyOCAyLjAxNDcyLC00LjUgNC41LC00LjV6IiBmaWxsLW9wYWNpdHk9IjAuNTAxOTYiIGZpbGw9IiNmZmJmMDAiIHN0cm9rZS1vcGFjaXR5PSIwLjUwMTk2IiBzdHJva2U9IiNjYzk5MDAiLz48cGF0aCBkPSJNMjMyLjA0NSwxODNjMCwtMi40ODUyOCAyLjAxNDcyLC00LjUgNC41LC00LjVjMi40ODUyOCwwIDQuNSwyLjAxNDcyIDQuNSw0LjVjMCwyLjQ4NTI4IC0yLjAxNDcyLDQuNSAtNC41LDQuNWMtMi40ODUyOCwwIC00LjUsLTIuMDE0NzIgLTQuNSwtNC41eiIgZmlsbC1vcGFjaXR5PSIwLjUwMTk2IiBmaWxsPSIjNGQ5N2ZmIiBzdHJva2Utb3BhY2l0eT0iMC41MDE5NiIgc3Ryb2tlPSIjMzM3M2NjIi8+PHBhdGggZD0iTTI0MC4wNDUsMTcyLjVjMi40ODUyOCwwIDQuNSwyLjAxNDcyIDQuNSw0LjVjMCwyLjQ4NTI4IC0yLjAxNDcyLDQuNSAtNC41LDQuNWMtMi40ODUyOCwwIC00LjUsLTIuMDE0NzIgLTQuNSwtNC41YzAsLTIuNDg1MjggMi4wMTQ3MiwtNC41IDQuNSwtNC41eiIgZmlsbC1vcGFjaXR5PSIwLjUwMTk2IiBmaWxsPSIjZmY2NjgwIiBzdHJva2Utb3BhY2l0eT0iMC41MDE5NiIgc3Ryb2tlPSIjZmYzMzU1Ii8+PC9nPjwvZz48L3N2Zz48IS0tcm90YXRpb25DZW50ZXI6OC4yOTQ5MTUwMDAwMDAwMDM6OC4yOTQ5MzUwMDAwMDAwMS0tPg==";
  class Color {
    getInfo() {
      return {
        id: 'lxColorManip',
        name: 'Colors',
        color1: '#FF9240',
        color3: '#E6662B',
        menuIconURI: blockIcon,
        blockIconURI: blockIcon,
        blocks: [
          {
            opcode: 'colorColor',
            blockType: Scratch.BlockType.REPORTER,
            text: 'color [COL]',
            arguments: {
              COL: {
                type: Scratch.ArgumentType.COLOR
              }
            }
          },
          {
            opcode: 'rgbOfColor',
            blockType: Scratch.BlockType.REPORTER,
            text: '[RGB] value of color [COL]',
            arguments: {
              COL: {
                type: Scratch.ArgumentType.COLOR
              },
              RGB: {
                type: Scratch.ArgumentType.STRING,
                menu: 'RGB_MENU'
              }
            }
          },
          {
            opcode: 'colorRandom',
            blockType: Scratch.BlockType.REPORTER,
            text: 'random color',
          },
          {
            opcode: 'colorAverage',
            blockType: Scratch.BlockType.REPORTER,
            text: 'average color [COL1] and [COL2]',
            arguments: {
              COL1: {
                type: Scratch.ArgumentType.COLOR
              },
              COL2: {
                type: Scratch.ArgumentType.COLOR
              }
            }
          }
        ],
        menus: {
            RGB_MENU: {
            acceptReporters: false,
            items: ['red', 'green', 'blue']
          }
        }
      };
    }

    colorColor(args) {
      return args.COL.toUpperCase();
    }
    rgbOfColor(args) {
      return grabRgb(args.COL, args.RGB)
    }
    colorRandom(args) {
      return ('#'+(Math.random()*0xFFFFFF<<0).toString(16)).toUpperCase();
    }
    colorAverage(args) {
      return '#' + avgHex(grabRgb(args.COL1, 'red'), grabRgb(args.COL2, 'red')) + avgHex(grabRgb(args.COL1, 'green'), grabRgb(args.COL2, 'green')) + avgHex(grabRgb(args.COL1, 'blue'), grabRgb(args.COL2, 'blue'));
    }
  }
  Scratch.extensions.register(new Color());
})(Scratch);
