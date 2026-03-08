import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_dimikro.de_q3u', ['https://dimikro.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
