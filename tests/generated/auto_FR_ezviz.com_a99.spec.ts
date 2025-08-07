import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_ezviz.com_a99', ['https://www.ezviz.com/us/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
