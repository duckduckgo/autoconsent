import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_educanou.fr_6il', ['https://educanou.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
