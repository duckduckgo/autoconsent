import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_wikifeetx.com_7wu', ['https://wikifeetx.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
