import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_alltours.de_q1e', ['https://www.alltours.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
