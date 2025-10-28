import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_allnatura.de_ivl', ['https://www.allnatura.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
