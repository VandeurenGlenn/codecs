import _codecs from './codecs.js'
const codecs = {}

type codecObject = {name: string, hashAlg: string, codec: string | number}

const addCodec = (codecInput: codecObject) => {
  let { hashAlg, codec, name } = codecInput
  if (!codecs[name]) codecs[name] = {
    hashAlg,
    codec: typeof codec === 'string' ? parseInt(codec, 16) : codec
  }
}

for (const codec of _codecs) {
  addCodec(codec)
}

const getCodec = (name: string): number => {
  if (typeof name === 'number') return name
  return getCodecByName(name).codec as number
}

const getCodecName = (codec: number): string | undefined => {
  return Object.keys(codecs).reduce((p, c) => {
    const item = codecs[c]
    if (item.codec === codec) return c;
    else return p;
  }, undefined)
}

const getCodecByName = (name: string): codecObject => codecs[name]

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

export default {
  isCodec,
  addCodec,
  getCodec,
  getHashAlg,
  getCodecName,
  validateCodec,
  codecs: codecs
}

