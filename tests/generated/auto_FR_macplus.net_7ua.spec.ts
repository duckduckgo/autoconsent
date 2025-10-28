import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_macplus.net_7ua', ['https://www.macplus.net/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
