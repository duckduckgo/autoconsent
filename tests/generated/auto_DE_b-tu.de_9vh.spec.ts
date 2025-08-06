import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_b-tu.de_9vh', ['https://www.b-tu.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
