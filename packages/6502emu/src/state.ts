import { Uint16, Uint8 } from "./types";

export class State {
	/**
	 * 8 Bit Accumulator Register.
	 */
	A = new Uint8();

	/**
	 * 8 Bit Index Register.
	 */
	X = new Uint8();

	/**
	 * 8 Bit Index Register.
	 */
	Y = new Uint8();

	/**
	 * 8 Bit Index Register.
	 */
	Z = new Uint8();

	/**
	 * 16 Bit Stack Pointer Counter.
	 * Accessible as SPH and SPL or combined as SP.
	 */
	SP = new Uint16();

	/**
	 * 8 Bit Base Page Register.
	 */
	B = new Uint8();

	/**
	 * 16 Bit Program Counter.
	 * Accessible as PCH and PCL or combined as PC.
	 */
	PC = new Uint16();

	/**
	 * 8 Bit Processor Status Register.
	 * Each flag is available separately.
	 */
	P = new Uint8();

	/** Carry Flag. */
	get P_C() {
		return this.P.testBit(0);
	}

	/** Carry Flag. */
	set P_C(val: boolean) {
		this.P.setBit(0, val);
	}

	/** Zero Flag. */
	get P_Z() {
		return this.P.testBit(1);
	}

	/** Zero Flag. */
	set P_Z(val: boolean) {
		this.P.setBit(1, val);
	}

	/** Interrupt Flag. */
	get P_I() {
		return this.P.testBit(2);
	}

	/** Interrupt Flag. */
	set P_I(val: boolean) {
		this.P.setBit(2, val);
	}

	/** Binary Coded Decimal Flag. */
	get P_D() {
		return this.P.testBit(3);
	}

	/** Binary Coded Decimal Flag. */
	set P_D(val: boolean) {
		this.P.setBit(3, val);
	}

	/** Breakpoint Flag. */
	get P_B() {
		return this.P.testBit(4);
	}

	/** Breakpoint Flag. */
	set P_B(val: boolean) {
		this.P.setBit(4, val);
	}

	/** Stack Extend Flag. */
	get P_E() {
		return this.P.testBit(5);
	}

	/** Stack Extend Flag. */
	set P_E(val: boolean) {
		this.P.setBit(5, val);
	}

	/** Overflow Flag. */
	get P_V() {
		return this.P.testBit(6);
	}

	/** Overflow Flag. */
	set P_V(val: boolean) {
		this.P.setBit(6, val);
	}

	/** Negative Flag. */
	get P_N() {
		return this.P.testBit(7);
	}

	/** Negative Flag. */
	set P_N(val: boolean) {
		this.P.setBit(7, val);
	}

	reset() {
		// Stack pointer set to byte mode
		this.P_E = false;
		// Stack page set to 0x01
		this.SP.highVal = 0x01;
		// B and Z registers are cleared
		this.B.val = 0;
		this.Z.val = 0;
		// Flags E and I are set
		this.P_E = true;
		this.P_I = true;

		// Program Counter is loaded with the restart vecord from 0xfffc (low byte) and 0xfffd (high byte)
	}
}
