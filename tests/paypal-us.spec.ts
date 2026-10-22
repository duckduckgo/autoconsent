import generateCMPTests from '../playwright/runner';

generateCMPTests('paypal-us', ['https://www.paypal.com/us/home'], {});

// This banner variant has no "Decline" button, so the rule hides it and no choice is stored.
generateCMPTests('paypal-us', ['https://www.paypal.com/ca/home'], { testSelfTest: false });
