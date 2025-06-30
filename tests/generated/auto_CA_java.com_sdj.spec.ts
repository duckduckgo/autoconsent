import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_java.com_sdj', ['https://www.java.com/en/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['CA'] });
