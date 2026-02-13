import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_alza.de_iq3', ['https://www.alza.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
