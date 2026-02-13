import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_allnatura.de_qku', ['https://www.allnatura.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
