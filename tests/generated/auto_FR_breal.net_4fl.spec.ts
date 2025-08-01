import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_breal.net_4fl', ['https://www.breal.net/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
