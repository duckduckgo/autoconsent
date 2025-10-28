import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_sfcardio.fr_xjf', ['https://www.sfcardio.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
