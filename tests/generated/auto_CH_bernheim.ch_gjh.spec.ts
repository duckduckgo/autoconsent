import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_bernheim.ch_gjh', ['https://bernheim.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
