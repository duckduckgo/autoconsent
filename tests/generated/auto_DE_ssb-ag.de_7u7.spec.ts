import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_ssb-ag.de_7u7', ['https://www.ssb-ag.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
