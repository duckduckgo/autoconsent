import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_windy.com_691', ['https://www.windy.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
