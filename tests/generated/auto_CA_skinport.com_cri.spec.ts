import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_skinport.com_cri', ['https://skinport.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['CA'] });
