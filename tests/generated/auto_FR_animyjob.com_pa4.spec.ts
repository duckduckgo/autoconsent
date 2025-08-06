import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_animyjob.com_pa4', ['https://www.animyjob.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
