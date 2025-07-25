import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_b-tu.de_0s7', ['https://www.b-tu.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
