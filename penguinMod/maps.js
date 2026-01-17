(function(Scratch) {
  'use strict';

  class MapType {
    customId = "lxMap"

    map = new Map()
  }
  
  class Extension {
    getInfo() {
      return {
        id: "lxMaps",
        name: "Maps",
        color1: "#FC874A",
        blocks: [
          {
            opcode: 'emptyMap',
            text: 'blank map',
            blockType: Scratch.BlockType.REPORTER,
            blockShape: Scratch.BlockShape.SCRAPPED,
            disableMonitor: true,
          },
        ]
      };
    }
    emptyMap() {
      return new Map();
    }
  }

  Scratch.extensions.register(new Extension());
})(Scratch);
