import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_bibb.de_o0k', ['https://www.bibb.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
