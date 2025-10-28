import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_winpower.de_u75', ['https://www.winpower.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
