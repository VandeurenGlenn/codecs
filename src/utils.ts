import codecs from './codecs.js'

globalThis.peernet = globalThis.peernet || {}
globalThis.peernet.codecs = globalThis.peernet.codecs as {} || {}

type codecObject = {name: string, hashAlg: string, codec: string}

const addCodec = (codecInput: codecObject) => {
  let { hashAlg, codec, name } = codecInput
  if (!globalThis.peernet.codecs[name]) globalThis.peernet.codecs[name] = {
    hashAlg,
    codec: parseInt(codec, 16)
  }
}

const getCodec = (name: string): codecObject => globalThis.peernet.codecs[name]

const getCodecName = (codec: number): string | undefined => {
  return Object.keys(globalThis.peernet.codecs).reduce((p, c) => {
    const item = globalThis.peernet.codecs[c]
    if (item.codec === codec) return c;
    else return p;
  }, undefined)
}

const getCodecByName = (name: string): codecObject => globalThis.peernet.codecs[name]

const getHashAlg = (name: string | number): string => {
  if (typeof name === 'number') return getCodecByName(getCodecName(name)).hashAlg
  return getCodecByName(name).hashAlg
}

const isCodec = (codec: codecObject) => {
  if (codec.codec !== undefined && codec.hashAlg) return true
  return false
}

const validateCodec = (codec: codecObject) => {
  if (codec.codec === undefined ||
      codec.hashAlg === undefined ||
      codec.name === undefined)
      throw new Error(`invalid codecInput: ${codec}`)
}

for (const codec of codecs) {
  addCodec(codec)
}

export default {  
  isCodec,
  addCodec,
  getCodec,
  getHashAlg,
  getCodecName,
  validateCodec,
  codecs: globalThis.peernet.codecs
}

