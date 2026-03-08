import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_atlauncher.com_u2x', ['https://atlauncher.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
