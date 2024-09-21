import blockchain from "./codecs/blockchain.js"
import internal from "./codecs/internal.js"
import social from './codecs/social.js'
import peernet from './codecs/peernet.js'

type codec = { hashAlg: string, name: string, codec: string}

const codecs: codec[] = [
  ...internal,
  ...blockchain,
  ...social,
  ...peernet
]
export {codecs as default}
