import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_lpb-bw.de_4ep', ['https://www.lpb-bw.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
