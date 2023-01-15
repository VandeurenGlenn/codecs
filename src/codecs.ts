import blockchain from "./codecs/blockchain.js"
import internal from "./codecs/internal.js"

type codec = { hashAlg: string, name: string, codec: string}

const codecs: codec[] = [
  ...internal,
  ...blockchain,
  // chat message
  {
    name: 'chat-message',
    codec: '0x70636d',
    hashAlg: 'dbl-keccak-256',
  }
]
export {codecs as default} 