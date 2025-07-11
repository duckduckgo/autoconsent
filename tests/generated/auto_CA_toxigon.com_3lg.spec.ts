import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_toxigon.com_3lg', ['https://toxigon.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['CA'] });
