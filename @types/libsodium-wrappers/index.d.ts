declare module 'libsodium-wrappers' {

    var sodium : Base

    export = sodium

    interface Base extends Constants, Hashing, SecretKey, Utilities {
        ready : Promise<void>
    }

    interface Constants {
        crypto_box_SEEDBYTES : number
        crypto_pwhash_ALG_DEFAULT : number
        crypto_pwhash_ALG_ARGON2I13 : number
        crypto_pwhash_ALG_ARGON2ID13 : number
        crypto_pwhash_MEMLIMIT_INTERACTIVE : number
        crypto_pwhash_MEMLIMIT_MAX : number
        crypto_pwhash_MEMLIMIT_MIN : number
        crypto_pwhash_MEMLIMIT_MODERATE : number
        crypto_pwhash_MEMLIMIT_SENSITIVE : number
        crypto_pwhash_OPSLIMIT_INTERACTIVE : number
        crypto_pwhash_OPSLIMIT_MAX : number
        crypto_pwhash_OPSLIMIT_MIN : number
        crypto_pwhash_OPSLIMIT_MODERATE : number
        crypto_pwhash_OPSLIMIT_SENSITIVE : number
        crypto_pwhash_BYTES_MAX : number
        crypto_pwhash_BYTES_MIN : number
        crypto_pwhash_SALTBYTES : number
        crypto_pwhash_STRBYTES : number
        crypto_shorthash_KEYBYTES : number
    }

    interface Hashing {
        crypto_generichash(size : number, byteArr : Buffer[]) : Buffer[]
        crypto_pwhash(length: number, password : Buffer[], salt : Buffer[], opslimit : number, memlimit : number, alg : number) : Buffer[]
        crypto_pwhash_str(password : Buffer[], opslimit : number, memlimit: number) : string
        crypto_pwhash_str_verify(hash : string, password : Buffer[]) : boolean
        crypto_shorthash(input : Buffer[] | string, key : Buffer[]) : Buffer[]
    }

    interface SecretKey {

    }

    interface Utilities {
        from_hex(str: string) : Buffer[]
        from_string(str : string) : Buffer[]
        randombytes_buf(size : number) : Buffer[]
        to_hex(val : Buffer[]) : string
    }
}