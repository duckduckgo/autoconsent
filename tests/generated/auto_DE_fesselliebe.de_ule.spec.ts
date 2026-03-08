import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_fesselliebe.de_ule', ['https://fesselliebe.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
