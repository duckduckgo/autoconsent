import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_hawesko.de_61c', ['https://www.hawesko.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
