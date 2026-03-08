import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_dzhk.de_869', ['https://dzhk.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
