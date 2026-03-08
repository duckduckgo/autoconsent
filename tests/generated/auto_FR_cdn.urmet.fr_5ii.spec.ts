import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_cdn.urmet.fr_5ii', ['https://cdn.urmet.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
