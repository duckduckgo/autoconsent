import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_lawyer.com_glx', ['https://www.lawyer.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
