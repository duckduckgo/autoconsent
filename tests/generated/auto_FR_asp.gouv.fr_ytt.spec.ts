import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_asp.gouv.fr_ytt', ['https://www.asp.gouv.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
