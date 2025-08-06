import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_gogun.de_8z8', ['https://gogun.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
