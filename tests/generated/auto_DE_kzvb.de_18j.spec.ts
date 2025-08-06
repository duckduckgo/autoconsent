import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_kzvb.de_18j', ['https://www.kzvb.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
