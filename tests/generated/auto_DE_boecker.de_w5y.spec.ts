import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_boecker.de_w5y', ['https://boecker.de/de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
