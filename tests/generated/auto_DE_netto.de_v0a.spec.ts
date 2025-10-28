import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_netto.de_v0a', ['https://netto.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
