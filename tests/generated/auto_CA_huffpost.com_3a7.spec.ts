import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_huffpost.com_3a7', ['https://www.huffpost.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['CA'] });
