import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_kulturnews.de_hzn', ['https://kulturnews.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
