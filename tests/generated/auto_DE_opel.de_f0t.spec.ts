import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_opel.de_f0t', ['https://www.opel.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
