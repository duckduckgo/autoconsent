import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_glamox.com_hy6', ['https://www.glamox.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
