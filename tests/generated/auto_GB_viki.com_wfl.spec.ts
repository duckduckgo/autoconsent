import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_viki.com_wfl', ['https://www.viki.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
