import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_opernhaus.ch_7ct', ['https://www.opernhaus.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
