import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_kassel.de_ibv', ['https://www.kassel.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
