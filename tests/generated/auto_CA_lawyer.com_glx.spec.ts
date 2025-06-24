import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_lawyer.com_glx', ['http://www.lawyer.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['CA'] });
