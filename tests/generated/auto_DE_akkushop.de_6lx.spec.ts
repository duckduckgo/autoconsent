import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_akkushop.de_6lx', ['https://www.akkushop.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
