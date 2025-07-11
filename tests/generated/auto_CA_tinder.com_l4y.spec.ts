import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_tinder.com_l4y', ['https://tinder.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['CA'] });
