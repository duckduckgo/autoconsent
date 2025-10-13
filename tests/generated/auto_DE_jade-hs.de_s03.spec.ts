import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_jade-hs.de_s03', ['https://www.jade-hs.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
