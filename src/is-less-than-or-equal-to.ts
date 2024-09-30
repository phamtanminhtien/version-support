import { Version } from './version.class';

/**
 * Compares the version with another version and returns true if the version is less than or equal to the other version
 * @param {Version | string} version Version to compare with
 * @param {Version | string} otherVersion Version to compare with
 * @returns {boolean} True if the version is less than or equal to the other version
 */
export const isLessThanOrEqualTo = (
  version: Version | string,
  otherVersion: Version | string,
): boolean => {
  version = version instanceof Version ? version : new Version(version);
  otherVersion =
    otherVersion instanceof Version ? otherVersion : new Version(otherVersion);
  return version.isLessThanOrEqualTo(otherVersion);
};
