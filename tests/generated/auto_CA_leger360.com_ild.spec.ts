import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_leger360.com_ild', ['https://leger360.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
