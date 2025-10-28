import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_krueger.ch_yq5', ['https://www.krueger.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
