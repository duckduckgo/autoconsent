import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_marca.com_iyp', ['https://www.marca.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
