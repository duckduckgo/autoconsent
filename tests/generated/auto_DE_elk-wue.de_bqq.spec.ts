import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_elk-wue.de_bqq', ['https://www.elk-wue.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
