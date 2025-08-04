import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_nextcloud.com_23p', ['https://nextcloud.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
