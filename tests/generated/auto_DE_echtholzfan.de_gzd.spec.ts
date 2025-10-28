import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_echtholzfan.de_gzd', ['https://echtholzfan.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
