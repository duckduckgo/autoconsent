import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_hsn-tsn.de_i6g', ['http://www.hsn-tsn.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
