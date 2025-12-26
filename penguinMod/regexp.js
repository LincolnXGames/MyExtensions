function isValidRegex(pattern) {
  try {
    new RegExp(pattern);
    return true; 
  } catch (e) {
    if (e instanceof SyntaxError) {
      return false;
    }
    throw e;
  }
}

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
      ScratchBlocks.BlockSvg.registerCustomShape("lxRegExp-packet", shape);
    });
  }

  const toRegex = (string) => {
    let regex = /\/(.*)\/(.*)/.exec(string);
    return new RegExp(regex[1], regex[2]);
  };
  const getRegex = (string) => {
    let regex = /\/(.*)\/(.*)/.exec(string);
    return [regex[1], regex[2]];
  };
  const compareRegex = (regex, str) => {
    let reg = /\/(.*)\/(.*)/.exec(str);
    return (
      String(regex) ===
      "/" + reg[1] + "/" + Array.from(reg[2]).sort().join("")
    );
  };
  const isRegex = (str) => {
    try {
      let string = str.toString();
      let regex = toRegex(string);
      return compareRegex(regex, string);
    } catch (err) {
      return false;
    }
  }
  
  class Extension {
    getInfo() {
      return {
        id: "lxRegExp",
        name: "Regex",
		    color1: "#fc4e5e",
        blocks: [
          {
            opcode: 'newRegexPattern',
            text: 'from pattern [A]',
            blockType: Scratch.BlockType.REPORTER,
            blockShape: "lxRegExp-packet",
            forceOutputType: "lxRegExp-packet",
		      	arguments: {
          	  A: {
		        	  type: Scratch.ArgumentType.STRING,
		      	  },
           	}
          },
          {
            opcode: 'newRegex',
            text: 'from pattern [A] and flags [B]',
            blockType: Scratch.BlockType.REPORTER,
            blockShape: "lxRegExp-packet",
            forceOutputType: "lxRegExp-packet",
		      	arguments: {
          	  A: {
		        	  type: Scratch.ArgumentType.STRING,
		      	  },
              B: {
		        	  type: Scratch.ArgumentType.STRING,
		      	  },
           	}
          },
          {
            opcode: 'newRegexString',
            text: 'parse [A] as regex',
            blockType: Scratch.BlockType.REPORTER,
            blockShape: "lxRegExp-packet",
            forceOutputType: "lxRegExp-packet",
		      	arguments: {
          	  A: {
		        	  type: Scratch.ArgumentType.STRING,
		      	  },
           	}
          },
          "---",
          {
            opcode: 'regexComponent',
            text: 'get [A] of [B]',
            blockType: Scratch.BlockType.REPORTER,
		      	arguments: {
          	  A: {
		        	  type: Scratch.ArgumentType.STRING,
                menu: 'COMPONENTS_MENU'
		      	  },
              B: {
		        	  shape: "lxRegExp-packet",
                check: "lxRegExp-packet",
		      	  },
           	}
          },
          "---",
          {
            opcode: 'isRegex',
            text: 'is [A] regex?',
            blockType: Scratch.BlockType.BOOLEAN,
		      	arguments: {
          	  A: {
		        	  type: Scratch.ArgumentType.STRING,
		      	  },
           	}
          },
          {
            opcode: 'compareRegexes',
            text: '[A] = [B]',
            blockType: Scratch.BlockType.BOOLEAN,
		      	arguments: {
          	  A: {
		        	  shape: "lxRegExp-packet",
                check: "lxRegExp-packet",
		      	  },
              B: {
		        	  shape: "lxRegExp-packet",
                check: "lxRegExp-packet",
		      	  },
           	}
          },
        ],
        menus: {
          COMPONENTS_MENU: {
            acceptReporters: true,
            items: ['pattern', 'flags']
          }
        },
      };
    }

    newRegexPattern({A}) {
      try {
        return String(new RegExp(A.toString(), ""));
      } catch (e) {
        return "";
      }
    }
    newRegex({A,B}) {
      try {
        return String(new RegExp(A.toString(), B.toString()));
      } catch (e) {
        return "";
      }
    }
    newRegexString({A}) {
      try {
        return String(toRegex(A.toString()));
      } catch (e) {
        return "";
      }
    }
    regexComponent({A,B}) {
      if (A == 'pattern') {
        return getRegex(B)[0];
      } else {
        return getRegex(B)[1];
      }
    }
    isRegex({A}) {
      return isRegex(A);
    }
    compareRegexes({A,B}) {
      try {
        let str1 = A.toString();
        let reg1 = toRegex(str1);
        let str2 = B.toString();
        let reg2 = toRegex(str2);
        if (compareRegex(reg1, str1) && compareRegex(reg2, str2)) {
          return (
            reg1.source === reg2.source && reg1.flags === reg2.flags
          );
        }
        return false;
      } catch (e) {
        return false;
      }
    }
  }

  Scratch.extensions.register(new Extension());
})(Scratch);
