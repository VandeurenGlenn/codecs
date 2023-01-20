type codecObject = {
    name: string;
    hashAlg: string;
    codec: string | number;
};
declare const _default: {
    isCodec: (codec: codecObject) => boolean;
    addCodec: (codecInput: codecObject) => void;
    getCodec: (name: string) => number;
    getHashAlg: (name: string | number) => string;
    getCodecName: (codec: number) => string;
    validateCodec: (codec: codecObject) => void;
    codecs: any;
};
export default _default;
