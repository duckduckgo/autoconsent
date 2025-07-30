import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_ezviz.com_jbf', ['https://www.ezviz.com/us/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
