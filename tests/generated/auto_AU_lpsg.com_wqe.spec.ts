import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_lpsg.com_wqe', ['https://www.lpsg.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
