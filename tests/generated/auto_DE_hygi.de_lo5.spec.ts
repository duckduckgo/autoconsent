import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_hygi.de_lo5', ['https://www.hygi.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
