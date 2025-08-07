import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_windy.com_wa5', ['https://www.windy.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
