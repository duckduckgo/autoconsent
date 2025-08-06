import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_leguano.eu_ins', ['https://leguano.eu/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
