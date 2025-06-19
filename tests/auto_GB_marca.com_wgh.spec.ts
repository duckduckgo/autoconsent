import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_marca.com_wgh', ['https://www.marca.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
