import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_brot-haus.de_dwo', ['https://brot-haus.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
