import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_statorials.org_3cx', ['https://statorials.org/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
