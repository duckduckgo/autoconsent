import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_bretz.de_s3k', ['https://bretz.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
