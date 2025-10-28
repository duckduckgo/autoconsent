import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_login.ionos.de_38z', ['https://login.ionos.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
