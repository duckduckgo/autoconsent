import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_hansgrohe.fr_7gg', ['https://www.hansgrohe.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
