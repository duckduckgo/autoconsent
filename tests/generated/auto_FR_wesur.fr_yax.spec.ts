import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_wesur.fr_yax', ['https://www.wesur.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
