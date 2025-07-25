import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_alltours.de_2kr', ['https://www.alltours.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
