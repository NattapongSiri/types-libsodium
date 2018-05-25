import {assert, expect, should, use} from 'chai'
should()

import sodium = require('libsodium-wrappers')

describe('crypto password hash', function() {
    it('should equals', function() {
        const sample = 'The quick brown fox jumps over the lazy dog'
        sodium.ready.then(() => {
            let salt = sodium.from_hex('7376D0C3B3D9D145EEF9D7EA45C1DA8D') // In real use case, use random value
            let hash = sodium.crypto_pwhash(sodium.crypto_box_SEEDBYTES, sodium.from_string(sample), salt, 20000, sodium.crypto_pwhash_MEMLIMIT_MIN, sodium.crypto_pwhash_ALG_ARGON2ID13)
            hash.should.deep.equals(sodium.from_hex('461728BD2004D2681B0D468A90280EBB009AD339AEF93668B9B6634056549171'))
        })
    })
})