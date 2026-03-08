import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_deepinfra.com_ic9', ['https://deepinfra.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
