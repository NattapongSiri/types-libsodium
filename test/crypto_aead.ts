/// <reference path="../@types/libsodium-wrappers/index.d.ts"/>
import {assert, expect, should, use} from 'chai'
should()

import sodium = require('libsodium-wrappers')

sodium.ready.then(() => {
    describe('crypto aead', function() {
        describe('testing xchacha20poly1305_ietf', function() {
            let key = sodium.crypto_aead_xchacha20poly1305_ietf_keygen()
            const nounce = sodium.randombytes_buf(sodium.crypto_aead_xchacha20poly1305_ietf_NPUBBYTES)
            const publicMessage = 'This is public message'
            const secretMessage = 'This is top secret'
            let cipher : Buffer[] = null
    
            it('should generate some cipher', function() {
                cipher = sodium.crypto_aead_xchacha20poly1305_ietf_encrypt(
                    sodium.from_string(secretMessage), 
                    sodium.from_string(publicMessage),
                    null,
                    nounce,
                    key
                )
                expect(cipher).should.exist
            })
    
            it('should decipher and match original text', function() {
                const extracted = sodium.crypto_aead_xchacha20poly1305_ietf_decrypt(null, cipher, sodium.from_string(publicMessage), nounce, key)
                expect(sodium.to_string(extracted)).to.be.equals(secretMessage)
            })
        })
    })
})