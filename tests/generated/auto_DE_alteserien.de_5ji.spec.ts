import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_alteserien.de_5ji', ['https://alteserien.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
