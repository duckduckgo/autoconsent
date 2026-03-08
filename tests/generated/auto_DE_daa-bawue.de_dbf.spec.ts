import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_daa-bawue.de_dbf', ['https://daa-bawue.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
