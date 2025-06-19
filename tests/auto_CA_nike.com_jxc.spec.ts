import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_CA_nike.com_jxc', ['https://www.nike.com/ca/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['CA'] });
