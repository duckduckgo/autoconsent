import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_lpsg.com_cc1', ['https://www.lpsg.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
