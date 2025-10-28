import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_filmpalast.net_4l0', ['https://filmpalast.net/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
