import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_alsace.eu_ors', ['https://www.alsace.eu/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
