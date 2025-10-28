import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_kvbawue.de_lkg', ['https://www.kvbawue.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
