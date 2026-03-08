import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_axaxl.com_q6e', ['https://axaxl.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
