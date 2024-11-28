import assert from "node:assert";
import test from "node:test";
import { Int8, Uint8 } from "./types";

test("Uint8", () => {
	const val = new Uint8();

	val.val = 0;
	assert.equal(val.val, 0);

	val.val = 42;
	assert.equal(val.val, 42);

	assert.throws(() => {
		val.val = 300;
	});
	assert.throws(() => {
		val.val = -1;
	});
});

test("Int8", () => {
	const val = new Int8();

	val.val = 0;
	assert.equal(val.val, 0);

	val.val = 42;
	assert.equal(val.val, 42);

	val.val = -128;
	assert.equal(val.val, -128);

	assert.throws(() => {
		val.val = 128;
	});
	assert.throws(() => {
		val.val = -129;
	});
});
