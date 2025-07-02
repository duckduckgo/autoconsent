import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_nextcloud.com_0', ['https://nextcloud.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
