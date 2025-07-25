import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_reichelt.de_gye', ['https://www.reichelt.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
