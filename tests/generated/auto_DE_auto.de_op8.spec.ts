import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_auto.de_op8', ['https://www.auto.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
