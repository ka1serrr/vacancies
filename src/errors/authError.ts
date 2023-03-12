export const authError = (error: string) => {
  switch (error) {
    case 'auth/email-already-in-use':
      return 'Email is already in use';
    case 'auth/internal-error':
      return 'Internal error';
    case 'auth/invalid-email' || 'auth/wrong-password':
      return 'Invalid email or password';
    case 'auth/network-request-failed':
      return 'Network request failed';
    case 'auth/admin-restricted-operation':
      return 'You have no permission to do this';
    case 'auth/captcha-check-failed':
      return 'Captcha is failed';
  }
};
