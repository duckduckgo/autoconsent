import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_juhn.com_cok', ['https://www.juhn.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
