import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_ofb.gouv.fr_84t', ['https://www.ofb.gouv.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
