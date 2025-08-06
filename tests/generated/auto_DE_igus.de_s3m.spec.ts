import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_igus.de_s3m', ['https://www.igus.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
