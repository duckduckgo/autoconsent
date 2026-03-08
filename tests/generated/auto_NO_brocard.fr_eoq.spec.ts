import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_brocard.fr_eoq', ['https://brocard.fr/en/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
