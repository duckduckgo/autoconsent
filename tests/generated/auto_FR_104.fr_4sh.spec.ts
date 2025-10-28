import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_104.fr_4sh', ['https://www.104.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
