import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_adfc.de_kv7', ['https://www.adfc.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
