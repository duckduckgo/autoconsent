import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_lpga.com_kp0', ['https://www.lpga.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
