import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_motsavec.fr_wtv', ['https://motsavec.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
