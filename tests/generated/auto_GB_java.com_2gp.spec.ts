import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_java.com_2gp', ['https://www.java.com/en/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
