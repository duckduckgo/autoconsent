import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_pastaweb.de_00m', ['https://pastaweb.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
