import { asHex, checkInt8, checkUint16, checkUint8 } from "./utils";
export class Uint8 {
    constructor(val = 0xde) {
        checkUint8(val);
        this._val = val;
    }
    get val() {
        checkUint8(this._val);
        return this._val;
    }
    set val(val) {
        checkUint8(val);
        this._val = val;
    }
    testBit(bitNum) {
        if (bitNum < 0 || bitNum > 7) {
            throw new Error("bitNum must be between 0 and 7, inclusive");
        }
        return ((0x01 << bitNum) & this._val) > 0;
    }
    setBit(bitNum, val = true) {
        if (bitNum < 0 || bitNum > 7) {
            throw new Error("bitNum must be between 0 and 7, inclusive");
        }
        if (val) {
            // Set bit
            this._val = this._val | (1 << bitNum);
        }
        else {
            // Clear bit
            this._val = this._val & (0xff & ~(1 << bitNum));
        }
    }
    clearBit(bitNum) {
        this.setBit(bitNum, false);
    }
    _val;
}
export class Int8 {
    constructor(val = 0x55) {
        checkInt8(val);
        this._val = val;
    }
    get val() {
        checkInt8(this._val);
        return this._val;
    }
    set val(val) {
        checkInt8(val);
        this._val = val;
    }
    _val;
}
export class Uint16 {
    constructor(val = 0xdead) {
        checkUint16(val);
        this._val = val;
    }
    get val() {
        checkUint16(this._val);
        return this._val;
    }
    set val(val) {
        checkUint16(val);
        this._val = val;
    }
    get highVal() {
        checkUint16(this._val);
        return (0xff00 & this._val) >> 8;
    }
    set highVal(val) {
        checkUint8(val);
        this._val = (val << 8) | (0x00ff & this._val);
    }
    get lowVal() {
        checkUint16(this._val);
        return 0x00ff & this._val;
    }
    _val;
}
export class RAM {
    constructor(size) {
        this._ram = new Uint8Array(size);
    }
    readByte(addr) {
        this._checkAddress(addr);
        return new Uint8(this._ram[addr]);
    }
    writeByte(addr, val) {
        this._checkAddress(addr);
        this._ram[addr] = val.val;
    }
    _checkAddress(addr) {
        if (addr < 0 || addr >= this._ram.byteLength) {
            throw new Error(`RAM address must be between 0 and ${asHex(this._ram.byteLength - 1)}, inclusive, received ${asHex(addr)}`);
        }
    }
    _ram;
}
