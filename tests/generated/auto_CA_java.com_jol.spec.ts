import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_java.com_jol', ['https://www.java.com/en/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['CA'] });
