import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_epubor.com_cvy', ['https://www.epubor.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
