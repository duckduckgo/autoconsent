import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_netze-bw.de_h4c', ['https://www.netze-bw.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
