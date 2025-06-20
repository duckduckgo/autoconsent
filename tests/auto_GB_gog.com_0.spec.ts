import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_gog.com_0', ['https://www.gog.com/en/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
