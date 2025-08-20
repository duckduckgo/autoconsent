import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_tinder.com_jfw', ['https://tinder.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
