import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_lpga.com_5zz', ['https://www.lpga.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
