import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_manutd.com_0', ['https://www.manutd.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
