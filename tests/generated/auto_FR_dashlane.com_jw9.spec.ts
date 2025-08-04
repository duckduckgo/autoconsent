import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_dashlane.com_jw9', ['https://www.dashlane.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
