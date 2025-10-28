import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_artibat.com_hw4', ['https://www.artibat.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
