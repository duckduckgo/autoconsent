import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_stripe.com_9n7', ['https://stripe.com/en-nl'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
