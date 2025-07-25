import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_gogun.de_l2s', ['https://gogun.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
