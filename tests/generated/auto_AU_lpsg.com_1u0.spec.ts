import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_lpsg.com_1u0', ['https://www.lpsg.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
