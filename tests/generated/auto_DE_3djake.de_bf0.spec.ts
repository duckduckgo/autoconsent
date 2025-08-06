import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_3djake.de_bf0', ['https://www.3djake.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
