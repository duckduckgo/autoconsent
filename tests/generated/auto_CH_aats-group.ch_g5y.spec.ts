import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_aats-group.ch_g5y', ['https://aats-group.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
