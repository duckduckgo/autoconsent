import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_bchobbies.com_eud', ['https://bchobbies.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
