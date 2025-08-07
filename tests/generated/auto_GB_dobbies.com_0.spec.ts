import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_dobbies.com_0', ['https://www.dobbies.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
