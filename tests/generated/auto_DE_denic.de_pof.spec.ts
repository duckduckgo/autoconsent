import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_denic.de_pof', ['https://www.denic.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
