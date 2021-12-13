#!/usr/bin/env node

const { programm } = require('commander')

programm.version('0.1.0')

programm.option('-m', '--from-mnemonic <mnemonic>')

programm.parse(process.argv)

const main = async () => {
  const WABridge = await require('@mymonero/mymonero-monero-client')({})

  const mnemonic = programm.opts().mnemonic

  if (mnemonic) {
    console.log(WABridge.seedAndKeysFromMnemonic(mnemonic, 'MAINNET'))
  } else {
    console.log(WABridge.generateWallet('en-US', 'MAINNET'))
  }
}

main()
  .then(() => {
    process.exit(0)
  }).catch(err => {
    console.log(err)
    process.exit(1)
  })
