import {assert, expect, should, use} from 'chai'
should()

import sodium = require('libsodium-wrappers')

describe('Short Hash', function() {
    it('should equals', function() {
        const sample = 'The quick brown fox jumps over the lazy dog'
        sodium.ready.then(() => {
            var key = sodium.from_hex('D69BD4FE38D3C8818A2088766A3A1C2A') // in real life, we use random bytes.
            var hash = sodium.crypto_shorthash(sample, key);
            hash.should.deep.equals(sodium.from_hex("D86A6DF2CEE0E1C0"))
        })
    })
})