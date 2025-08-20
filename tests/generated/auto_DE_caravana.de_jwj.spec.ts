import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_caravana.de_jwj', ['https://www.caravana.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
