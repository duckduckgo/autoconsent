import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_accio.com_06i', ['https://www.accio.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
