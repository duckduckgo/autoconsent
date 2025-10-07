import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_stripe.com_9tf', ['https://stripe.com/en-nl'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
