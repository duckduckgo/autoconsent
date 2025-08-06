import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_peugeot.de_r7j', ['https://www.peugeot.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
