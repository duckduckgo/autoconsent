import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_elk-wue.de_ryl', ['https://www.elk-wue.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
