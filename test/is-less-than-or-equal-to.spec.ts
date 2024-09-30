import { isLessThanOrEqualTo } from '../src/index';

describe('isLessThanOrEqualTo', () => {
  it('should return true if the version is less than or equal to the other version', () => {
    expect(isLessThanOrEqualTo('1.3.4', '1.3.4')).toBe(true);
    expect(isLessThanOrEqualTo('1.3.4', '1.3.04')).toBe(true);
    expect(isLessThanOrEqualTo('1.3.4', '1.3.5')).toBe(true);
  });

  it('should return false if the version is not less than or equal to the other version', () => {
    expect(isLessThanOrEqualTo('1.3.4', '1.3.3')).toBe(false);
  });

  it('should throw an error if the version is not a valid version', () => {
    expect(() => isLessThanOrEqualTo('1.3', '1.3.4')).toThrow();
    expect(() => isLessThanOrEqualTo('1.3.4', '1.3')).toThrow();
  });
});
