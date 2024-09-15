class Color {
  getInfo() {
    return {
      id: 'lxColorManip',
      name: 'Colors',
      color1: '#ABBF2C',
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
        }
      ]
    };
  }

  colorColor(args) {
    return args.COL;
  }
}
Scratch.extensions.register(new Color());
