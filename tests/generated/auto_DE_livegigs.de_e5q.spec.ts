import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_livegigs.de_e5q', ['https://www.livegigs.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
