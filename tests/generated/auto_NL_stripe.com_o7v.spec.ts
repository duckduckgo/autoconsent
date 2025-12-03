import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_stripe.com_o7v', ['https://stripe.com/en-nl'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
