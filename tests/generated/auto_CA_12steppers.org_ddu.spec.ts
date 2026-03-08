import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_12steppers.org_ddu', ['https://12steppers.org/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
