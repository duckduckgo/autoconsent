import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_cimco.de_r1e', ['https://cimco.de/de_de'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
