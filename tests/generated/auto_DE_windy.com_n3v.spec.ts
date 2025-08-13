import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_windy.com_n3v', ['https://www.windy.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
