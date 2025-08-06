import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_vvs.de_66t', ['https://www.vvs.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
