import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_bonn.de_6sz', ['https://www.bonn.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
