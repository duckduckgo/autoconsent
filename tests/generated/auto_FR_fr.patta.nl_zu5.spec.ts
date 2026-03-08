import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_fr.patta.nl_zu5', ['https://fr.patta.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
