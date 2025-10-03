import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_bibb.de_ggx', ['https://www.bibb.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
