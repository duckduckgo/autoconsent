import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_grosbill.com_k67', ['https://www.grosbill.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
