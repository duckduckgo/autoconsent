import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_metricfans.com_hfa', ['https://metricfans.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
