import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_alza.de_rdh', ['https://www.alza.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
