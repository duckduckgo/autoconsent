import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_change.org_e9u', ['https://www.change.org/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
