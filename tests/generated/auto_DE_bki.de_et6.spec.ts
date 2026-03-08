import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_bki.de_et6', ['https://bki.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
