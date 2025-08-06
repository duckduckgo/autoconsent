import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_livegigs.de_fmz', ['https://www.livegigs.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
