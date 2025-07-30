import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_igus.de_b0q', ['https://www.igus.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
