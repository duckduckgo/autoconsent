import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_interhyp.de_ikl', ['https://www.interhyp.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
