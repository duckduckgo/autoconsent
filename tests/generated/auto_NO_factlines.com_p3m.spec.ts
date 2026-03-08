import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_factlines.com_p3m', ['https://factlines.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
