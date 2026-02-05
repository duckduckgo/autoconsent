import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_lpb-bw.de_b7w', ['https://www.lpb-bw.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
