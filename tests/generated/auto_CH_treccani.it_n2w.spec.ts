import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_treccani.it_n2w', ['https://www.treccani.it/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
