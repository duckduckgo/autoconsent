import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_audiovision.de_qd5', ['https://audiovision.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
