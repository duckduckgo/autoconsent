import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_aknw.de_ncx', ['https://www.aknw.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
