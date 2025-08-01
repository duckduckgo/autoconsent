import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_pornic.com_ast', ['https://www.pornic.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
