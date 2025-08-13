import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_nextcloud.com_f8e', ['https://nextcloud.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
