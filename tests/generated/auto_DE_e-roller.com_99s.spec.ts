import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_e-roller.com_99s', ['https://e-roller.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
