import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_breeze24.com_vjt', ['https://www.breeze24.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
