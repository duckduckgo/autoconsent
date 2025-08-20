import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_3djake.de_ai1', ['https://www.3djake.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
