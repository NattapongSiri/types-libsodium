import {assert, expect, should, use} from 'chai'
should()

import sodium = require('libsodium-wrappers')

describe('Generic Hash', function() {
    it('should equals', function() {
        const sample = 'The quick brown fox jumps over the lazy dog'
        sodium.ready.then(() => {
            let hash = sodium.crypto_generichash(64, sodium.from_string(sample))
            hash.should.deep.equals(sodium.from_hex('A8ADD4BDDDFD93E4877D2746E62817B116364A1FA7BC148D95090BC7333B3673F82401CF7AA2E4CB1ECD90296E3F14CB5413F8ED77BE73045B13914CDCD6A918'))
        })
    })
})