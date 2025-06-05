import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_id.sky.com_0', ['https://id.sky.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
