import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_okvoyage.com_nvn', ['https://www.okvoyage.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
