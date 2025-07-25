import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_animyjob.com_bbh', ['https://www.animyjob.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
