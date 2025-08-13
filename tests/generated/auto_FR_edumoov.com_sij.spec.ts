import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_edumoov.com_sij', ['https://www.edumoov.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
