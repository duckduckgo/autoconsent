import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_stripe.com_0', ['https://stripe.com/gb'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
