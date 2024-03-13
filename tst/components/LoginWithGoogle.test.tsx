import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useGoogleLogin, hasGrantedAllScopesGoogle } from '@react-oauth/google';
import LoginWithGoogle from '../../src/components/LoginWithGoogle';

jest.mock('@react-oauth/google', () => ({
  // GoogleLogin: jest.fn(
  //   () => <div data-testid="mock-google-login">Mock Login</div>
  // ),
  useGoogleLogin: jest.fn(),
  hasGrantedAllScopesGoogle: jest.fn(),
}));

// Extend expect with jest-axe assertions
expect.extend(toHaveNoViolations);

describe('LoginWithGoogle Component', () => {
  it('calls useGoogleOneTapLogin on mount', () => {
    render(<LoginWithGoogle />);
    expect(useGoogleLogin).toHaveBeenCalled();
  });

  it('renders GoogleLogin component', () => {
    render(<LoginWithGoogle />);
    const loginButton = screen.getByTestId('google-login-button');
    expect(loginButton).toBeInTheDocument();
  });

  it('handles successful login via useGoogleOneTapLogin', () => {
    (useGoogleLogin as jest.Mock).mockImplementationOnce(({ onSuccess }) => {
      onSuccess('mockCredentialResponse');
    });
    render(<LoginWithGoogle />);
    expect(useGoogleLogin).toHaveBeenCalled();
  });

  it('updates login status on successful login', () => {
    const mockTokenResponse = {
      accessToken: 'mockAccessToken',
      idToken: 'mockIdToken',
    };

    (useGoogleLogin as jest.Mock).mockImplementation(({ onSuccess }) => {
      return () => onSuccess(mockTokenResponse);
    });

    render(<LoginWithGoogle />);

    const loginButton = screen.getByTestId('google-login-button');
    fireEvent.click(loginButton);

    expect(useGoogleLogin).toHaveBeenCalledWith(
      expect.objectContaining({
        onSuccess: expect.any(Function),
      })
    );

    expect(useGoogleLogin).toHaveBeenCalledTimes(2);
  });

  it('should not have basic accessibility issues', async () => {
    const { container } = render(<LoginWithGoogle />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
