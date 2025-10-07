import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_gibert.com_pnt', ['https://www.gibert.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
