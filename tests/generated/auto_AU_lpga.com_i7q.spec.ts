import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_lpga.com_i7q', ['https://www.lpga.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
