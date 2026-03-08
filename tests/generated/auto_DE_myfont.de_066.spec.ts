import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_myfont.de_066', ['http://www.myfont.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
