import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_java.com_e8b', ['https://www.java.com/en/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
