import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_allosurf.net_kmj', ['https://www.allosurf.net/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
