import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_pastaweb.de_50a', ['https://pastaweb.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
