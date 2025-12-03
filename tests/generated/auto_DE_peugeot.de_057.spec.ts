import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_peugeot.de_057', ['https://www.peugeot.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
