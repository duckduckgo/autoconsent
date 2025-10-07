import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_leger360.com_wi3', ['https://leger360.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
