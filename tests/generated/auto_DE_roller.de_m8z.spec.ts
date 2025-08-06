import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_roller.de_m8z', ['https://www.roller.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
