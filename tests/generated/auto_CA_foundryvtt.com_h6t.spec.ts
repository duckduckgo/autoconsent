import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_foundryvtt.com_h6t', ['https://foundryvtt.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
