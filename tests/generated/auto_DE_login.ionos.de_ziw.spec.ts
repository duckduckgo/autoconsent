import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_login.ionos.de_ziw', ['https://login.ionos.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
