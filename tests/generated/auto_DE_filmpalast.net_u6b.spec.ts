import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_filmpalast.net_u6b', ['https://filmpalast.net/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
