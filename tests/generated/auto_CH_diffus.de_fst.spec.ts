import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_diffus.de_fst', ['https://diffus.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
