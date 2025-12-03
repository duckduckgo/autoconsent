import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_vinello.ch_qa4', ['https://www.vinello.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
