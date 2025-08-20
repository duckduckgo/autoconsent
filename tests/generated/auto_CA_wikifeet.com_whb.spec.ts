import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_wikifeet.com_whb', ['https://wikifeet.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
