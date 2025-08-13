import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_audiovision.de_zcb', ['https://audiovision.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
