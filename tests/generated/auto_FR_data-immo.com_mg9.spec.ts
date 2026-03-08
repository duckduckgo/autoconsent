import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_data-immo.com_mg9', ['https://data-immo.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
