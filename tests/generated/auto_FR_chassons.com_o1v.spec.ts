import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_chassons.com_o1v', ['https://www.chassons.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
