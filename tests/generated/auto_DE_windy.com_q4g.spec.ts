import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_windy.com_q4g', ['https://www.windy.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
