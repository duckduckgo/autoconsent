import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_eutraining.eu_nyw', ['https://eutraining.eu/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
