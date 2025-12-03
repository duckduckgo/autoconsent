import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_pascoe.de_b65', ['https://www.pascoe.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
