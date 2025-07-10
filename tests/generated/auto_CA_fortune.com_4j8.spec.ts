import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_fortune.com_4j8', ['https://fortune.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['CA'] });
