import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_windy.com_mzi', ['https://www.windy.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
