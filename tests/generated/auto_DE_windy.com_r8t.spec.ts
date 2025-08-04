import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_windy.com_r8t', ['https://www.windy.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
