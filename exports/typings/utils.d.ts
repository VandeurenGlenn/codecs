type codecObject = {
    name: string;
    hashAlg: string;
    codec: string;
};
declare const _default: {
    isCodec: (codec: codecObject) => boolean;
    addCodec: (codecInput: codecObject) => void;
    getCodec: (name: string) => codecObject;
    getHashAlg: (name: string | number) => string;
    getCodecName: (codec: number) => string;
    validateCodec: (codec: codecObject) => void;
    codecs: any;
};
export default _default;
