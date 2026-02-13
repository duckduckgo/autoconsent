import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_auto.swiss_z35', ['https://www.auto.swiss/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
