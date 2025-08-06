import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_hsn-tsn.de_ox8', ['http://www.hsn-tsn.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
