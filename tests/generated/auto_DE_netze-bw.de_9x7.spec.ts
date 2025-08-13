import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_netze-bw.de_9x7', ['https://www.netze-bw.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
