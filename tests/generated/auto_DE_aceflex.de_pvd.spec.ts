import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_aceflex.de_pvd', ['https://www.aceflex.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
