import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_opensnow.com_tk1', ['https://opensnow.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
