import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_audiovision.de_e0r', ['https://audiovision.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
