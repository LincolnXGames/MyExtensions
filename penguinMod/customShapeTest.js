(function(Scratch) {
  'use strict';
  /* get ScratchBlocks if availiable... */
  const shape = {
    emptyInputPath: "m 16 0 h 16 h 16 l -4 4 l 4 4 l -4 4 l 4 4 l -4 4 l 4 4 l -4 4 l 4 4 l -4 0 h -12 h -16 h -16 l 4 -4 l -4 -4 l 4 -4 l -4 -4 l 4 -4 l -4 -4 l 0 0 l 4 -4 l -4 -4 z",
    leftPath: (block) => {
    const edgeWidth = block.height / 2;
    const s = edgeWidth / 16;
    return [`h ${-16 * s} l ${4 * s} ${-4 * s} l ${-4 * s} ${-4 * s} l ${4 * s} ${-4 * s} l ${-4 * s} ${-4 * s} l ${4 * s} ${-4 * s} l ${-4 * s} ${-4 * s} l ${0 * s} ${0 * s} l ${4 * s} ${-4 * s} l ${-4 * s} ${-4 * s}`];
    },
    rightPath: (block) => {
    const edgeWidth = block.edgeShapeWidth_;
    const s = edgeWidth / 16;
    return [`h ${16 * s} l ${-4 * s} ${4 * s} l ${4 * s} ${4 * s} l ${-4 * s} ${4 * s} l ${4 * s} ${4 * s} l ${-4 * s} ${4 * s} l ${4 * s} ${4 * s} l ${-4 * s} ${4 * s} l ${4 * s} ${4 * s} l ${-4 * s} ${0 * s} h ${-12 * s}`];
    },
  }
  if (Scratch.gui) {
    Scratch.gui.getBlockly().then(ScratchBlocks => {
      ScratchBlocks.BlockSvg.registerCustomShape("lxPmodTests-packet", shape);
    });
  }
  class Extension {
    getInfo() {
      return {
        id: "lxPmodTests",
        name: "LincolnX's Tests",
        blocks: [
          {
            opcode: 'logToConsole',
            text: 'log to console',
            blockType: Scratch.BlockType.COMMAND,
          },
          {
            opcode: 'testReporter',
            text: 'testing!',
            blockType: Scratch.BlockType.REPORTER,
            blockShape: "lxPmodTests-packet",
            forceOutputType: "lxPmodTests-packet",
            disableMonitor: true,
	          allowDropAnywhere: true,
          },
        ]
      };
    }

    logToConsole() {
      console.log('Hello world!');
    }
    testReporter() {
      return "Hello world!";
    }
  }

  Scratch.extensions.register(new Extension());
})(Scratch);
