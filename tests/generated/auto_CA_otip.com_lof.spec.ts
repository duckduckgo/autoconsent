import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_otip.com_lof', ['https://www.otip.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
