const internalCodecs = [
  {
    name: 'disco-hash',
    codec: '0x30',
    hashAlg: 'dbl-keccak-256', // ,
    // testnet: 'olivia'
  },
  {
    name: 'peernet-peer-response',
    codec: '0x707072',
    hashAlg: 'keccak-256',
  },
  {
    name: 'peernet-peer',
    codec: '0x7070',
    hashAlg: 'keccak-256',
  },
  {
    name: 'peernet-dht',
    codec: '0x706468',
    hashAlg: 'keccak-256',
  },
  {
    name: 'peernet-dht-response',
    codec: '0x706472',
    hashAlg: 'keccak-256',
  },
  // data
  {
    name: 'peernet-data',
    codec: '0x706461',
    hashAlg: 'keccak-256',
  },
  {
    name: 'peernet-data-response',
    codec: '0x70646172',
    hashAlg: 'keccak-256',
  },
  // message
  {
    name: 'peernet-message',
    codec: '0x706d65',
    hashAlg: 'keccak-256',
  },
  // pubsub
  {
    name: 'peernet-ps',
    codec: '707073',
    hashAlg: 'keccak-256',
  },
  {
    name: 'peernet-response',
    codec: '0x7072',
    hashAlg: 'keccak-256',
  },
  {
    name: 'peernet-request',
    codec: '0x707271',
    hashAlg: 'keccak-256',
  },
  {
    name: 'peernet-file' ,
    codec: '0x7066',
    hashAlg: 'keccak-256',
  },
  {
    name: 'peernet-file-response' ,
    codec: '0x706672',
    hashAlg: 'keccak-256',
  }
]
export { internalCodecs as default }