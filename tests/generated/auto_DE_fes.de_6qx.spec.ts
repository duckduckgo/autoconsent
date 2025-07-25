import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_fes.de_6qx', ['https://www.fes.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
