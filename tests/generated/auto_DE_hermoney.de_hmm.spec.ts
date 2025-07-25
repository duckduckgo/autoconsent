import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_hermoney.de_hmm', ['https://www.hermoney.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
