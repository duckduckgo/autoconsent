import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_dmf.tv_1jp', ['https://www.dmf.tv/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
