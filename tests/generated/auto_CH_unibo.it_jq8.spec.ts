import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_unibo.it_jq8', ['https://www.unibo.it/it'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
