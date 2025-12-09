import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_go.tinder.com_5m2', ['https://tinder.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
