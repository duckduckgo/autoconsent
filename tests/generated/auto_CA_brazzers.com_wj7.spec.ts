import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_brazzers.com_wj7', ['https://www.brazzers.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
