import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_alza.de_ets', ['https://www.alza.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
