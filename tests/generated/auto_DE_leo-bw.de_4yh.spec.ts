import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_leo-bw.de_4yh', ['https://www.leo-bw.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
