import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_songkick.com_iw0', ['https://www.songkick.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['AU'] });
