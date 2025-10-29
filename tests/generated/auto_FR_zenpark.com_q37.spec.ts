import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_zenpark.com_q37', ['https://zenpark.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
