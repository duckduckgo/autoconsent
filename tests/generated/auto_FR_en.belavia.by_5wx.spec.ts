import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_en.belavia.by_5wx', ['https://en.belavia.by/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
