import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_ancestry.de_5tu', ['https://www.ancestry.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
