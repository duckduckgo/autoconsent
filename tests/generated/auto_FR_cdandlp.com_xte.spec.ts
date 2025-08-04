import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_cdandlp.com_xte', ['https://www.cdandlp.com/en/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
