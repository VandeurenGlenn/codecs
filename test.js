import utils from "./exports/utils.js";
const codec = utils.getCodec('block-message')
const hashAlg = utils.getHashAlg('block-message')
console.log(`# can get codec: ${codec > 0}`);
console.log(`# can get hashAlg: ${hashAlg === 'keccak-256'}`);
console.log(`# isValidCodec: ${utils.validateCodec({name: 'block-message', codec, hashAlg}) === undefined}`);
console.log(`# isCodec: ${utils.isCodec({name: 'block-message', codec, hashAlg})}`);