import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_lpsg.com_z5o', ['https://www.lpsg.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
