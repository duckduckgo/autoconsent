import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_viewsurf.com_9zt', ['https://www.viewsurf.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
