import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_valcenis.com_j7x', ['https://www.valcenis.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
