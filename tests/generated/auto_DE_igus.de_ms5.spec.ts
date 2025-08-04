import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_igus.de_ms5', ['https://www.igus.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
