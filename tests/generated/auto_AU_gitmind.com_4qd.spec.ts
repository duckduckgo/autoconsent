import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_gitmind.com_4qd', ['https://gitmind.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
