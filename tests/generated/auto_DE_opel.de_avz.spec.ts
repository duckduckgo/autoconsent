import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_opel.de_avz', ['https://www.opel.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
