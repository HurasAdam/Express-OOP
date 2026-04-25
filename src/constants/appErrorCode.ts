/**
 * @copyright 2026 Adam Huras
 * @license Apache-2.0
 */

const enum AppErrorCode {
  InvalidAccessToken = "InvalidAccessToken",
  UserNotFound = "UserNotFound",
  Forbidden = "Forbidden",
  InvalidRole = "InvalidRole",
  InvalidCredentials = "InvalidCredentials",
  AccountDisabled = "AccountDisabled",
  NotFound = "NotFound",
}

export default AppErrorCode;
