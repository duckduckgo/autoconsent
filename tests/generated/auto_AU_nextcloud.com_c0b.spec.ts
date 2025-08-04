import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_nextcloud.com_c0b', ['https://nextcloud.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
