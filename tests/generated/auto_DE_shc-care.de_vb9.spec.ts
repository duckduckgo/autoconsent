import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_shc-care.de_vb9', ['https://shc-care.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
