import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_ameos.ch_yq2', ['https://www.ameos.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
