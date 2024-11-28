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

	set val(val: number) {
		checkUint8(val);
		this._val = val;
	}

	testBit(bitNum: number): boolean {
		if (bitNum < 0 || bitNum > 7) {
			throw new Error("bitNum must be between 0 and 7, inclusive");
		}

		return ((0x01 << bitNum) & this._val) > 0;
	}

	setBit(bitNum: number, val: boolean = true) {
		if (bitNum < 0 || bitNum > 7) {
			throw new Error("bitNum must be between 0 and 7, inclusive");
		}

		if (val) {
			// Set bit
			this._val = this._val | (1 << bitNum);
		} else {
			// Clear bit
			this._val = this._val & (0xff & ~(1 << bitNum));
		}
	}

	clearBit(bitNum: number) {
		this.setBit(bitNum, false);
	}

	private _val: number;
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

	set val(val: number) {
		checkInt8(val);
		this._val = val;
	}

	private _val: number;
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

	set val(val: number) {
		checkUint16(val);
		this._val = val;
	}

	get highVal() {
		checkUint16(this._val);
		return (0xff00 & this._val) >> 8;
	}

	set highVal(val: number) {
		checkUint8(val);
		this._val = (val << 8) | (0x00ff & this._val);
	}

	get lowVal() {
		checkUint16(this._val);
		return 0x00ff & this._val;
	}

	private _val: number;
}

export class RAM {
	constructor(size: number) {
		this._ram = new Uint8Array(size);
	}

	readByte(addr: number) {
		this._checkAddress(addr);
		return new Uint8(this._ram[addr]);
	}

	writeByte(addr: number, val: Uint8) {
		this._checkAddress(addr);
		this._ram[addr] = val.val;
	}

	private _checkAddress(addr: number) {
		if (addr < 0 || addr >= this._ram.byteLength) {
			throw new Error(
				`RAM address must be between 0 and ${asHex(this._ram.byteLength - 1)}, inclusive, received ${asHex(addr)}`
			);
		}
	}

	private _ram: Uint8Array;
}
