import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_snaply.de_p6z', ['https://www.snaply.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
