import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_hsn-tsn.de_q2a', ['http://www.hsn-tsn.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
