import codecs from './codecs.js'
globalThis.peernetCodecs = globalThis.peernetCodecs as {} || {}

type codecObject = {name: string, hashAlg: string, codec: string | number}

const addCodec = (codecInput: codecObject) => {
  let { hashAlg, codec, name } = codecInput
  if (!globalThis.peernetCodecs[name]) globalThis.peernetCodecs[name] = {
    hashAlg,
    codec: isNaN(codec as number) ? parseInt(codec as string, 16) : codec
  }
}

const getCodec = (name: string): number => {
  if (typeof name === 'number') return name
  return getCodecByName(name).codec as number
}

const getCodecName = (codec: number): string | undefined => {
  return Object.keys(globalThis.peernetCodecs).reduce((p, c) => {
    const item = globalThis.peernetCodecs[c]
    if (item.codec === codec) return c;
    else return p;
  }, undefined)
}

const getCodecByName = (name: string): codecObject => globalThis.peernetCodecs[name]

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
  codecs: globalThis.peernetCodecs
}

