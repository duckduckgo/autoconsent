import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_adfc.de_783', ['https://www.adfc.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
