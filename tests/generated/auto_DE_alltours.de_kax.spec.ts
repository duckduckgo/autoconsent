import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_alltours.de_kax', ['https://www.alltours.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
