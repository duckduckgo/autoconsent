import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_meteojob.com_64l', ['https://www.meteojob.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
