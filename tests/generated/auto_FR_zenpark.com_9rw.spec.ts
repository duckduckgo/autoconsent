import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_zenpark.com_9rw', ['https://zenpark.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
