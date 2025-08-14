import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_stripe.com_jib', ['https://stripe.com/en-ca'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
