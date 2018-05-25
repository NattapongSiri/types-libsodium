import {assert, expect, should, use} from 'chai'
should()


import sodium = require('libsodium-wrappers')

describe('crypto password hash store', function() {
    const sample = 'The quick brown fox jumps over the lazy dog'
    it('validate correct password', function() {
        sodium.ready.then(() => {
            let hash = sodium.crypto_pwhash_str(sodium.from_string(sample), 20000, sodium.crypto_pwhash_MEMLIMIT_MIN)
            expect(sodium.crypto_pwhash_str_verify(hash, sodium.from_string(sample))).to.be.true
        })
    })

    it('validate incorrect password', function() {
        sodium.ready.then(() => {
            let hash = sodium.crypto_pwhash_str(sodium.from_string(sample), 20000, sodium.crypto_pwhash_MEMLIMIT_MIN)
            expect(sodium.crypto_pwhash_str_verify(hash, sodium.from_string('some other string'))).to.be.false
        })
    })
})