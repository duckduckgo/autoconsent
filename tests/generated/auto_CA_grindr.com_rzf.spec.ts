import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_grindr.com_rzf', ['https://www.grindr.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
