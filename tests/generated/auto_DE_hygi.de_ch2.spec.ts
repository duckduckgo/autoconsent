import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_hygi.de_ch2', ['https://www.hygi.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
