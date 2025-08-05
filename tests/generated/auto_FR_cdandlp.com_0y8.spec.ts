import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_cdandlp.com_0y8', ['https://www.cdandlp.com/en/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
