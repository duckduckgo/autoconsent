import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_fh-swf.de_d4w', ['https://www.fh-swf.de/de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
