import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_opex360.com_rqs', ['https://www.opex360.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
