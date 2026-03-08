import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_professeure.fr_6il', ['https://educanou.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
