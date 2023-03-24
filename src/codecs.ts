import blockchain from "./codecs/blockchain.js"
import internal from "./codecs/internal.js"
import social from './codecs/social.js'

type codec = { hashAlg: string, name: string, codec: string}

const codecs: codec[] = [
  ...internal,
  ...blockchain,
  ...social
]
export {codecs as default} 