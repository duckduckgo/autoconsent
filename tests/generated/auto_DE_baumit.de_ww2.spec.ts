import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_baumit.de_ww2', ['https://baumit.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
