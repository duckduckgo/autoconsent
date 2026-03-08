import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_connselmer.com_zgk', ['https://connselmer.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
