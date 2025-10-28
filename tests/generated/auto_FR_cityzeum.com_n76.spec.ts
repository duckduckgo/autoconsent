import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_cityzeum.com_n76', ['https://www.cityzeum.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
