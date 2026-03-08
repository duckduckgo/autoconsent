import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_culture.pl_s58', ['https://culture.pl/en'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
