import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_fh-swf.de_bsd', ['https://www.fh-swf.de/de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
