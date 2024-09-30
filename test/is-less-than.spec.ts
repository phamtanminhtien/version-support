import { isLessThan } from '../src/index';

describe('isLessThan', () => {
  it('should return true if the version is less than the other version', () => {
    expect(isLessThan('1.3.4', '1.3.5')).toBe(true);
    expect(isLessThan('1.3.4', '1.3.5')).toBe(true);
  });

  it('should return false if the version is not less than the other version', () => {
    expect(isLessThan('1.3.4', '1.3.3')).toBe(false);
    expect(isLessThan('1.3.05', '1.3.4')).toBe(false);
  });

  it('should throw an error if the version is not a valid version', () => {
    expect(() => isLessThan('1.3', '1.3.4')).toThrow();
    expect(() => isLessThan('1.3.4', '1.3')).toThrow();
  });
});
