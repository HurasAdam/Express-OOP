import { compareSync, hashSync } from "bcrypt";

/**
 * Hash a plain text value using bcrypt
 *
 * @param value  - Plain text value to hash (e.g. SuperStrongPassword!)
 * @param saltRounds - Number of salt rounds (default :10)
 * @returns  - Hashed value
 */

export function hashValue(value: string, saltRounds: number = 10) {
  return hashSync(value, saltRounds);
}

/**
 *
 * @param value  - Plan text value (e.g. password provided by user)
 * @param hashedValue - Hashed value stored in database
 * @returns - True if values match, otherwise return false
 */

export function compareValue(value: string, hashedValue: string) {
  return compareSync(value, hashedValue);
}
