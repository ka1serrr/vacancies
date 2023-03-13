export const authError = (error: string) => {
  let errorMessage = '';
  // switch (error) {
  //   case 'auth/email-already-in-use':
  //     errorMessage = 'Email is already in use';
  //     break;
  //   case 'auth/internal-error':
  //     errorMessage = 'Internal error';
  //     break;
  //   case 'auth/invalid-email' || 'auth/wrong-password':
  //     errorMessage = 'Invalid email or password';
  //     break;
  //   case 'auth/network-request-failed':
  //     errorMessage = 'Network request failed';
  //     break;
  //   case 'auth/admin-restricted-operation':
  //     errorMessage = 'You have no permission to do this';
  //     break;
  //   case 'auth/captcha-check-failed':
  //     errorMessage = 'Captcha is failed';
  //     break;
  // }
  if (error === 'auth/email-already-in-use') {
    errorMessage = 'Email is already in use';
  }
  return errorMessage;
};
