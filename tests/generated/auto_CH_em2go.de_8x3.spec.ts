import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_em2go.de_8x3', ['https://em2go.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
