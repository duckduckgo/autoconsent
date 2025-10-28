import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_rtm.fr_e2r', ['https://www.rtm.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
