import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_about.x.com_o1z', ['https://about.x.com/en'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
