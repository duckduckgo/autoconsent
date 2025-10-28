import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_agencedpc.fr_jli', ['https://www.agencedpc.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
