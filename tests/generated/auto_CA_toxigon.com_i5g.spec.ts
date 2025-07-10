import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_toxigon.com_i5g', ['https://toxigon.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['CA'] });
