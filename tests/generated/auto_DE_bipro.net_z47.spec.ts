import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_bipro.net_z47', ['https://bipro.net/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
