import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_winpower.de_5p7', ['https://www.winpower.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
