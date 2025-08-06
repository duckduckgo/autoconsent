import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_bd-adultes.com_fjp', ['https://bd-adultes.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
