import { isGreaterThanOrEqualTo } from '../src/index';

describe('isGreaterThanOrEqualTo', () => {
  it('should return true if the version is greater than or equal to the other version', () => {
    expect(isGreaterThanOrEqualTo('1.3.4', '1.3.4')).toBe(true);
    expect(isGreaterThanOrEqualTo('1.3.4', '1.3.04')).toBe(true);
    expect(isGreaterThanOrEqualTo('1.3.4', '1.3.3')).toBe(true);
  });

  it('should return false if the version is not greater than or equal to the other version', () => {
    expect(isGreaterThanOrEqualTo('1.3.4', '1.3.5')).toBe(false);
  });

  it('should throw an error if the version is not a valid version', () => {
    expect(() => isGreaterThanOrEqualTo('1.3', '1.3.4')).toThrow();
    expect(() => isGreaterThanOrEqualTo('1.3.4', '1.3')).toThrow();
  });
});
