export class Version {
  private _version: string;
  private _major: number;
  private _minor: number;
  private _patch: number;

  /**
   *
   * @param version Version string in the format of x.y.z with x, y, z being numbers
   */
  constructor(version: string) {
    // check if the version is in the format of x.y.z
    const versionRegex = /^\d+\.\d+\.\d+$/;
    if (!versionRegex.test(version)) {
      throw new Error('Invalid version format');
    }

    this._version = version;
    const [major, minor, patch] = version.split('.').map(Number);
    this._major = major;
    this._minor = minor;
    this._patch = patch;
  }

  /**
   * Returns the version string
   * @returns {string} Version string
   */
  get version(): string {
    return this._version;
  }

  /**
   * Compares the version with another version and returns true if the version is equal to the other version
   * @param {Version | string} version Version to compare with
   * @returns {boolean} True if the version is equal to the other version
   */
  isEqualTo(version: Version | string): boolean {
    version = version instanceof Version ? version : new Version(version);
    return (
      this._major === version._major &&
      this._minor === version._minor &&
      this._patch === version._patch
    );
  }

  /**
   * Compares the version with another version and returns true if the version is greater than the other version
   * @param {Version | string} version Version to compare with
   * @returns {boolean} True if the version is greater than the other version
   */
  isGreaterThan(version: Version | string): boolean {
    version = version instanceof Version ? version : new Version(version);
    if (this._major > version._major) {
      return true;
    } else if (this._major === version._major) {
      if (this._minor > version._minor) {
        return true;
      } else if (this._minor === version._minor) {
        if (this._patch > version._patch) {
          return true;
        }
      }
    }
    return false;
  }

  /**
   * Compares the version with another version and returns true if the version is less than the other version
   * @param {Version | string} version Version to compare with
   * @returns {boolean} True if the version is less than the other version
   */
  isLessThan(version: Version | string): boolean {
    version = version instanceof Version ? version : new Version(version);
    return !this.isGreaterThan(version) && !this.isEqualTo(version);
  }

  /**
   * Compares the version with another version and returns true if the version is greater than or equal to the other version
   * @param {Version | string} version Version to compare with
   * @returns {boolean} True if the version is greater than or equal to the other version
   */
  isGreaterThanOrEqualTo(version: Version | string): boolean {
    return this.isGreaterThan(version) || this.isEqualTo(version);
  }

  /**
   * Compares the version with another version and returns true if the version is less than or equal to the other version
   * @param {Version | string} version Version to compare with
   * @returns {boolean} True if the version is less than or equal to the other version
   */
  isLessThanOrEqualTo(version: Version | string): boolean {
    return this.isLessThan(version) || this.isEqualTo(version);
  }

  /**
   * Returns the version string
   * @returns {string} Version string
   */
  toString(): string {
    return this._version;
  }
}
