import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_lausannehc.ch_twx', ['https://lausannehc.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
