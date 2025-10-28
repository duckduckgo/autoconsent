import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_cidj.com_gwy', ['https://www.cidj.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
