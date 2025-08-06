import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_dashlane.com_58u', ['https://www.dashlane.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
