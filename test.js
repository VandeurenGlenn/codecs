import utils from "./exports/utils.js";
const codec = utils.getCodec('block-message')
console.log(`# can get codec: ${codec.codec > 0}`);
console.log(`# can get hashAlg: ${utils.getHashAlg('block-message') === 'keccak-256'}`);
console.log(`# isValidCodec: ${utils.validateCodec({name: 'block-message', ...codec}) === undefined}`);
console.log(`# isCodec: ${utils.isCodec({name: 'block-message', ...codec})}`);