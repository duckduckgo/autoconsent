import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_lpsg.com_n9h', ['https://www.lpsg.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
