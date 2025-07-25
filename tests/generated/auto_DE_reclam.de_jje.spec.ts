import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_reclam.de_jje', ['https://www.reclam.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
