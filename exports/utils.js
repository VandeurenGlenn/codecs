import codecs from './codecs.js';

globalThis.peernetCodecs = globalThis.peernetCodecs || {};
const addCodec = (codecInput) => {
    let { hashAlg, codec, name } = codecInput;
    if (!globalThis.peernetCodecs[name])
        globalThis.peernetCodecs[name] = {
            hashAlg,
            codec: isNaN(codec) ? parseInt(codec, 16) : codec
        };
};
const getCodec = (name) => {
    if (typeof name === 'number')
        return name;
    return getCodecByName(name).codec;
};
const getCodecName = (codec) => {
    return Object.keys(globalThis.peernetCodecs).reduce((p, c) => {
        const item = globalThis.peernetCodecs[c];
        if (item.codec === codec)
            return c;
        else
            return p;
    }, undefined);
};
const getCodecByName = (name) => globalThis.peernetCodecs[name];
const getHashAlg = (name) => {
    if (typeof name === 'number')
        return getCodecByName(getCodecName(name)).hashAlg;
    return getCodecByName(name).hashAlg;
};
const isCodec = (codec) => {
    if (codec.codec !== undefined && codec.hashAlg)
        return true;
    return false;
};
const validateCodec = (codec) => {
    if (codec.codec === undefined ||
        codec.hashAlg === undefined ||
        codec.name === undefined)
        throw new Error(`invalid codecInput: ${codec}`);
};
for (const codec of codecs) {
    addCodec(codec);
}
var utils = {
    isCodec,
    addCodec,
    getCodec,
    getHashAlg,
    getCodecName,
    validateCodec,
    codecs: globalThis.peernetCodecs
};

export { utils as default };
