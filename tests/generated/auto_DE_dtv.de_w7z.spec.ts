import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_dtv.de_w7z', ['https://www.dtv.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
