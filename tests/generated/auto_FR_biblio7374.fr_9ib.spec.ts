import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_biblio7374.fr_9ib', ['https://biblio7374.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
