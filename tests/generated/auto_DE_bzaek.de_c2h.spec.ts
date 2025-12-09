import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_bzaek.de_c2h', ['https://www.bzaek.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
