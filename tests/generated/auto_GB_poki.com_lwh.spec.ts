import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_poki.com_lwh', ['https://poki.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
