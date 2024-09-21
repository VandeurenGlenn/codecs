import utils from "./exports/utils.js";

const codec = utils.getCodec('test-codec')
const hashAlg = utils.getHashAlg('test-codec')
console.log(`# can get codec: ${codec > 0}`);
console.log(`# can get hashAlg: ${hashAlg === 'keccak-256'}`);
console.log(`# isValidCodec: ${utils.validateCodec({name: 'test-codec', codec, hashAlg}) === undefined}`);
console.log(`# isCodec: ${utils.isCodec({name: 'test-codec', codec, hashAlg})}`);
