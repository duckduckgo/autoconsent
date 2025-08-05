import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_igus.de_e4a', ['https://www.igus.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
