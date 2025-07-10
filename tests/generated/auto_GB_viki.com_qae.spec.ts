import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_viki.com_qae', ['https://www.viki.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
