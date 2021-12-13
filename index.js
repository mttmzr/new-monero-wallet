#!/usr/bin/env node

const { program } = require('commander')

program.version('0.1.1')

program.option('-m', '--from-mnemonic <mnemonic>', 'mnemonic phrase to derive keys from')

program.parse(process.argv)

const main = async () => {
  const WABridge = await require('@mymonero/mymonero-monero-client')({})

  const mnemonic = program.opts().fromMnemonic

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
