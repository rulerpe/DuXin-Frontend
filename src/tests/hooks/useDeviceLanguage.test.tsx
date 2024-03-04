import { renderHook } from '@testing-library/react';
import useDeviceLanguage from '../../hooks/useDeviceLanguage';

describe('useDeviceLanguage', () => {
  it('should return the navigator language', () => {
    Object.defineProperty(navigator, 'language', {
      value: 'en',
      configurable: true,
    });

    const { result } = renderHook(() => useDeviceLanguage());

    expect(result.current).toBe('en');
  });

  it('should return the first navigator languages if navigator.language is not available', () => {
    Object.defineProperty(navigator, 'language', {
      value: undefined,
      configurable: true,
    });
    Object.defineProperty(navigator, 'languages', {
      value: ['en', 'zh'],
      configurable: true,
    });

    const { result } = renderHook(() => useDeviceLanguage());

    expect(result.current).toBe('en');
  });
});
