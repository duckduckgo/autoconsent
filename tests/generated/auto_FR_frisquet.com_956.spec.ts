import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_frisquet.com_956', ['https://www.frisquet.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
