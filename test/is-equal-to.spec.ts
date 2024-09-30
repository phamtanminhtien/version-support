import { isEqualTo } from '../src/index';

describe('isEqualTo', () => {
  it('should return true if the version is equal to the other version', () => {
    expect(isEqualTo('1.3.4', '1.3.4')).toBe(true);
    expect(isEqualTo('1.3.4', '1.3.04')).toBe(true);
  });

  it('should return false if the version is not equal to the other version', () => {
    expect(isEqualTo('1.3.4', '1.3.5')).toBe(false);
    expect(isEqualTo('1.3.4', '1.3.03')).toBe(false);
  });

  it('should throw an error if the version is not a valid version', () => {
    expect(() => isEqualTo('1.3', '1.3.4')).toThrow();
    expect(() => isEqualTo('1.3.4', '1.3')).toThrow();
  });
});
