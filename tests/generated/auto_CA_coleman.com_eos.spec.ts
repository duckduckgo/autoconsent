import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_coleman.com_eos', ['https://www.coleman.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['CA'] });
