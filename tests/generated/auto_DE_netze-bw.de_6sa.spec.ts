import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_netze-bw.de_6sa', ['https://www.netze-bw.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
