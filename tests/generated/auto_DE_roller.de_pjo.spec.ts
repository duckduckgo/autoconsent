import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_roller.de_pjo', ['https://www.roller.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
