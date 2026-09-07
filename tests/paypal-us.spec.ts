import generateCMPTests from '../playwright/runner';

generateCMPTests('paypal-us', ['https://www.paypal.com/us/home'], {});

// This banner variant has no "Decline" button, so opting out goes through the cookie
// preferences page, which navigates away and back, running the rule more than once.
generateCMPTests('paypal-us', ['https://www.paypal.com/ca/home'], { expectedRuns: 3 });
