import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_rexel.de_uky', ['https://www.rexel.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
