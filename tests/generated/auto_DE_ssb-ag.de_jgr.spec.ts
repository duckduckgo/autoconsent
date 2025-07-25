import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_ssb-ag.de_jgr', ['https://www.ssb-ag.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
