import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_dell.com_00z', ['https://www.dell.com/en-ca'], { testOptIn: false, testSelfTest: false, onlyRegions: ['CA'] });
