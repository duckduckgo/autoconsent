import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_ebern.de_ptw', ['https://ebern.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
