import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_gamever.io_fxa', ['https://gamever.io/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
