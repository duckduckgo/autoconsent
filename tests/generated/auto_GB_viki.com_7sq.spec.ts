import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_viki.com_7sq', ['https://www.viki.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
