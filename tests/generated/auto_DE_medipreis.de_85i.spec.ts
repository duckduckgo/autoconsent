import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_medipreis.de_85i', ['https://www.medipreis.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
