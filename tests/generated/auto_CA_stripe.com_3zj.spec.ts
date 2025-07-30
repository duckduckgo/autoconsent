import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_stripe.com_3zj', ['https://stripe.com/en-ca'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
