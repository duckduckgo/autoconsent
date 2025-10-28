import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_dlink.com_xo2', ['https://dlink.ca/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
