import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_gogun.de_m82', ['https://gogun.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
