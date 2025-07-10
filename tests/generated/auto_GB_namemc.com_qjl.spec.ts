import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_namemc.com_qjl', ['https://namemc.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
