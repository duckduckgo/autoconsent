import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_ca.ecco.com_qpe', ['https://ca.ecco.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['CA'] });
