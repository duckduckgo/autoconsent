import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_coffeediag.com_2nx', ['https://coffeediag.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
