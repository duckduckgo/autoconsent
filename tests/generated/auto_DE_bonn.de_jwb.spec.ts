import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_bonn.de_jwb', ['https://www.bonn.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
