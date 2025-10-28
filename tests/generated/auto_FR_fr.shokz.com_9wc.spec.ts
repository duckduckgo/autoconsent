import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_fr.shokz.com_9wc', ['https://fr.shokz.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
