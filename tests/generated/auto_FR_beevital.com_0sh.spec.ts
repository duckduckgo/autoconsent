import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_beevital.com_0sh', ['https://beevital.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
