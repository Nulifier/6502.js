import { STRICT } from "./config";
export const UINT8_MIN = 0;
export const UINT8_MAX = 255;
export const INT8_MIN = -128;
export const INT8_MAX = 127;
export const UINT16_MIN = 0;
export const UINT16_MAX = 65535;
export const INT16_MIN = -32768;
export const INT16_MAX = 32767;
export function checkUint8(val) {
    if (!STRICT)
        return;
    if (val < UINT8_MIN || val > UINT8_MAX) {
        throw new Error(`Value "${val}" is not in the allowable range for uint8`);
    }
}
export function checkInt8(val) {
    if (!STRICT)
        return;
    if (val < INT8_MIN || val > INT8_MAX) {
        throw new Error(`Value "${val}" is not in the allowable range for int8`);
    }
}
export function checkUint16(val) {
    if (!STRICT)
        return;
    if (val < UINT16_MIN || val > UINT16_MAX) {
        throw new Error(`Value "${val}" is not in the allowable range for uint16`);
    }
}
export function checkInt16(val) {
    if (!STRICT)
        return;
    if (val < INT16_MIN || val > INT16_MAX) {
        throw new Error(`Value "${val}" is not in the allowable range for int16`);
    }
}
export function asHex(val, byteCount, includePrefix = true) {
    let num = val.toString(16);
    if (byteCount !== undefined) {
        if (!Number.isInteger(byteCount) || byteCount < 1) {
            throw new Error("byteCount must be a positive integer");
        }
        num = num.padStart(2 * byteCount, "0");
    }
    if (includePrefix) {
        num = `0x${num}`;
    }
    return num;
}
