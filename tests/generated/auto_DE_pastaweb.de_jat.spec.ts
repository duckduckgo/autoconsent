import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_pastaweb.de_jat', ['https://pastaweb.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
