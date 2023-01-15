const blockchainCodecs = [
  // normal block
  {
    name: 'leofcoin-block',
    codec: '0x6c62',
    hashAlg: 'dbl-keccak-512', // ,
    // testnet: 'olivia'
  },
  {
    name: 'leofcoin-tx',
    codec: '0x6c74',
    hashAlg: 'dbl-keccak-512', // ,
    // testnet: 'olivia'
  },
  // itx
  {
    name: 'leofcoin-itx',
    codec: '0x6c69',
    hashAlg: 'keccak-512', // ,
    // testnet: 'olivia'
  },
  // peer reputation
  {
    name: 'leofcoin-pr',
    codec: '0x6c70',
    hashAlg: 'keccak-256', // ,
    // testnet: 'olivia'
  },
  {
    name: 'contract-message',
    codec: '0x63636d',
    hashAlg: 'keccak-256'
  },
  {
    name: 'transaction-message',
    codec: '0x746d',
    hashAlg: 'keccak-256'
  },

  {
    name: 'block-message',
    codec: '0x626d',
    hashAlg: 'keccak-256'
  },

  {
    name: 'bw-message',
    codec: '0x62776d',
    hashAlg: 'keccak-256'
  },

  {
    name: 'bw-request-message',
    codec: '0x6277726d',
    hashAlg: 'keccak-256'
  },

  {
    name: 'validator-message',
    codec: '0x766d',
    hashAlg: 'keccak-256'
  }
]
export { blockchainCodecs as default }