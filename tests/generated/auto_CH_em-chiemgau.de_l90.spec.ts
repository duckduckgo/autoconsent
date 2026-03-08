import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_em-chiemgau.de_l90', ['https://em-chiemgau.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
