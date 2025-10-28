import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_play-in.com_flf', ['https://www.play-in.com/en'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
