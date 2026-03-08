import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_blogs.nabu.de_yp5', ['https://blogs.nabu.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
