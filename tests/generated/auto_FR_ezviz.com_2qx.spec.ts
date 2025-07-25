import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_ezviz.com_2qx', ['https://www.ezviz.com/us/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
