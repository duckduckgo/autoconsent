import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_runnea.de_ewi', ['https://www.runnea.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
