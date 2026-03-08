import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_fiw.thws.de_l9c', ['https://fiw.thws.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
