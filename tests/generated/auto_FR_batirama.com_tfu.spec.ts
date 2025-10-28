import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_batirama.com_tfu', ['https://www.batirama.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
