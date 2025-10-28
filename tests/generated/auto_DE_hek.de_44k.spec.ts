import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_hek.de_44k', ['https://www.hek.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
