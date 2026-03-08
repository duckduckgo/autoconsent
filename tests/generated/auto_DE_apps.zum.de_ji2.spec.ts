import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_apps.zum.de_ji2', ['https://apps.zum.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
