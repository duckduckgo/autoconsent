import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_asleman.org_911', ['https://asleman.org/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
