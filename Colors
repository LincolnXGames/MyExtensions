class Color {
  getInfo() {
    return {
      id: 'colormanip',
      name: 'Colors',
      color1: '#3ee0ba',
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
