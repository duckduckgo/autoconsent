import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_bluey.tv_jxs', ['https://www.bluey.tv/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
