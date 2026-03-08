import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_apical.xyz_cyp', ['https://apical.xyz/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
