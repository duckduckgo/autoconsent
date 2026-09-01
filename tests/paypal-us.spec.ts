import generateCMPTests from '../playwright/runner';

// The /ca/home variant of the banner has no "Decline" button, only a close control.
generateCMPTests('paypal-us', ['https://www.paypal.com/us/home', 'https://www.paypal.com/ca/home'], {});
