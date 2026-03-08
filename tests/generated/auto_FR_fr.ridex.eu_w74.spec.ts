import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_fr.ridex.eu_w74', ['https://fr.ridex.eu/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
