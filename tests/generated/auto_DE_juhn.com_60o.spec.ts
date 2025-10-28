import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_juhn.com_60o', ['https://www.juhn.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
