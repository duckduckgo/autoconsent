import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_tinder.com_ea1', ['https://tinder.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['CA'] });
