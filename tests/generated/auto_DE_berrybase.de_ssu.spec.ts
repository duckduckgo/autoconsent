import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_berrybase.de_ssu', ['https://www.berrybase.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
