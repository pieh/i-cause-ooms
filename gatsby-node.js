// const {
//   Buffer,
//   constants: { MAX_LENGTH },
// } = require("buffer");

// exports.sourceNodes = async () => {
//   const buffers = new Set();
//   let i = 0;
//   while (true) {
//     const buffer = Buffer.alloc(MAX_LENGTH, `x`);
//     buffers.add(buffer);
//     console.log(`round #${++i}`);

//     if (i % 10 === 0) {
//       await new Promise((resolve) => setImmediate(resolve));
//     }
//   }
// };

// let counter = 0;

exports.createPages = () => {
  // counter++;

  // if (counter >= 2) {
  throw new Error(`that should be inc build`);
  // }
};
