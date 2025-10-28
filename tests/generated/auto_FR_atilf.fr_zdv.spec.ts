import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_atilf.fr_zdv', ['https://www.atilf.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
