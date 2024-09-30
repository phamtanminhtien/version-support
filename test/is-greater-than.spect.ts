import { isGreaterThan } from '../src/index';

describe('isGreaterThan', () => {
  it('should return true if the version is greater than the other version', () => {
    expect(isGreaterThan('1.3.4', '1.3.3')).toBe(true);
    expect(isGreaterThan('1.3.4', '1.3.03')).toBe(true);
  });

  it('should return false if the version is not greater than the other version', () => {
    expect(isGreaterThan('1.3.4', '1.3.5')).toBe(false);
    expect(isGreaterThan('1.3.4', '1.3.4')).toBe(false);
  });

  it('should throw an error if the version is not a valid version', () => {
    expect(() => isGreaterThan('1.3', '1.3.4')).toThrow();
    expect(() => isGreaterThan('1.3.4', '1.3')).toThrow();
  });
});
