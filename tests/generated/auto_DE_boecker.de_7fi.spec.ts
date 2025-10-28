import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_boecker.de_7fi', ['https://boecker.de/de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
