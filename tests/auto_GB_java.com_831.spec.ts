import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_java.com_831', ['https://www.java.com/en/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
