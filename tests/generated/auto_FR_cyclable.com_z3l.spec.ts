import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_cyclable.com_z3l', ['https://www.cyclable.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
