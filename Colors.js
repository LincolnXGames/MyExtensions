const menuIcon = "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI1NS42NTIwNCIgaGVpZ2h0PSI1NS42NTIwNCIgdmlld0JveD0iMCwwLDU1LjY1MjA0LDU1LjY1MjA0Ij48ZGVmcz48bGluZWFyR3JhZGllbnQgeDE9IjI0Mi4wNjU4NSIgeTE9IjE1Mi4zNjgwMSIgeDI9IjIzNy45MzQxOSIgeTI9IjIwNy42MzE5OSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJjb2xvci0xIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiMzMzNhZmYiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMzMzNhZmYiIHN0b3Atb3BhY2l0eT0iMCIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IHgxPSIyMTIuMzY4MDIiIHkxPSIxNzcuOTM0MTciIHgyPSIyNjcuNjMxOTkiIHkyPSIxODIuMDY1ODMiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0iY29sb3ItMiI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjMzZmZjMzIiBzdG9wLW9wYWNpdHk9IjAuNzAxOTYiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMzNmZmMzMiIHN0b3Atb3BhY2l0eT0iMCIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yMTIuMTc0LC0xNTIuMTczOTgpIj48ZyBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiPjxwYXRoIGQ9Ik0yMTIuMjkwOTEsMTgwYzAsLTE1LjMwMzMyIDEyLjQwNTc5LC0yNy43MDkxMSAyNy43MDkxMSwtMjcuNzA5MTFjMTUuMzAzMzIsMCAyNy43MDkxMSwxMi40MDU3OSAyNy43MDkxMSwyNy43MDkxMWMwLDE1LjMwMzMyIC0xMi40MDU3OSwyNy43MDkxMSAtMjcuNzA5MTEsMjcuNzA5MTFjLTE1LjMwMzMyLDAgLTI3LjcwOTExLC0xMi40MDU3OSAtMjcuNzA5MTEsLTI3LjcwOTExeiIgZmlsbD0iI2ZmMzMzMyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9Ik5hTiIvPjxwYXRoIGQ9Ik0yMTIuMzY4MDMsMTc3LjkzNDE3YzEuMTQwOTMsLTE1LjI2MDczIDE0LjQzNzEsLTI2LjcwNzA5IDI5LjY5NzgyLC0yNS41NjYxNmMxNS4yNjA3MywxLjE0MDkzIDI2LjcwNzA5LDE0LjQzNzEgMjUuNTY2MTYsMjkuNjk3ODJjLTEuMTQwOTMsMTUuMjYwNzMgLTE0LjQzNzEsMjYuNzA3MDkgLTI5LjY5NzgyLDI1LjU2NjE2Yy0xNS4yNjA3MywtMS4xNDA5MyAtMjYuNzA3MDksLTE0LjQzNzEgLTI1LjU2NjE2LC0yOS42OTc4MnoiIGZpbGw9InVybCgjY29sb3ItMSkiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSJOYU4iLz48cGF0aCBkPSJNMjM3LjkzNDE5LDIwNy42MzJjLTE1LjI2MDcyLC0xLjE0MDkzIC0yNi43MDcwOSwtMTQuNDM3MSAtMjUuNTY2MTYsLTI5LjY5NzgzYzEuMTQwOTMsLTE1LjI2MDczIDE0LjQzNzEsLTI2LjcwNzA5IDI5LjY5NzgzLC0yNS41NjYxN2MxNS4yNjA3MywxLjE0MDkzIDI2LjcwNzA5LDE0LjQzNzEgMjUuNTY2MTYsMjkuNjk3ODNjLTEuMTQwOTMsMTUuMjYwNzMgLTE0LjQzNzEsMjYuNzA3MDkgLTI5LjY5NzgzLDI1LjU2NjE3eiIgZmlsbD0idXJsKCNjb2xvci0yKSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9Ik5hTiIvPjxwYXRoIGQ9Ik0yMTMuNDI0LDE4MGMwLC0xNC42Nzc1MyAxMS44OTg0OSwtMjYuNTc2MDIgMjYuNTc2MDIsLTI2LjU3NjAyYzE0LjY3NzUzLDAgMjYuNTc2MDIsMTEuODk4NDkgMjYuNTc2MDIsMjYuNTc2MDJjMCwxNC42Nzc1MyAtMTEuODk4NDksMjYuNTc2MDIgLTI2LjU3NjAyLDI2LjU3NjAyYy0xNC42Nzc1MywwIC0yNi41NzYwMiwtMTEuODk4NDkgLTI2LjU3NjAyLC0yNi41NzYwMnoiIGZpbGw9Im5vbmUiIHN0cm9rZS1vcGFjaXR5PSIwLjQ0MzE0IiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMi41Ii8+PC9nPjwvZz48L3N2Zz4=";

class Color {
  getInfo() {
    return {
      id: 'lxColorManip',
      name: 'Colors',
      color1: '#ABBF2C',
      menuIconURI: menuIcon,
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
          opcode: 'colorIdentity',
          blockType: Scratch.BlockType.REPORTER,
          text: '[COL]',
          arguments: {
            COL: {
              type: Scratch.ArgumentType.COLOR
            }
          }
        },
        {
          opcode: 'numToHexOrDec',
          blockType: Scratch.BlockType.REPORTER,
          text: '[NUM] to base [DEX]',
          arguments: {
            NUM: {
              type: Scratch.ArgumentType.STRING
            },
            DEX: {
              type: Scratch.ArgumentType.STRING,
              menu: 'DEX_MENU'
            }
          }
        },
        {
          opcode: 'rgbOfColor',
          blockType: Scratch.BlockType.REPORTER,
          text: '[RGB] of color [COL]',
          arguments: {
            COL: {
              type: Scratch.ArgumentType.COLOR
            },
            RGB: {
              type: Scratch.ArgumentType.STRING,
              menu: 'RGB_MENU'
            }
          }
        }
      ],
      menus: {
          DEX_MENU: {
          acceptReporters: true,
          items: ['10', '16']
        },
          RGB_MENU: {
          acceptReporters: true,
          items: [{text: 'Red', value: 'R'}, {text: 'Green', value: 'G'}, {text: 'Blue', value: 'B'}]
        }
      }
    };
  }

  colorColor(args) {
    return args.COL;
  }
  colorIdentity(args) {
    return args.COL;
  }
  numToHexOrDec(args) {
    if (args.DEX === 10) {
      return parseInt(args.NUM, 16);
    } else {
      return Number(args.NUM).toString(16);
    }
  }
  rgbOfColor(args) {
    if (args.RGB === 'R') {
      return args.COL.charAt(1) + args.COL.charAt(2);
    } else if (args.RGB === 'G') {
      return args.COL.charAt(3) + args.COL.charAt(4);
    } else {
      return args.COL.charAt(5) + args.COL.charAt(6);
    }
  }
}
Scratch.extensions.register(new Color());
