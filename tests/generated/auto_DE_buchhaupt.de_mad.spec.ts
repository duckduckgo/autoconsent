import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_buchhaupt.de_mad', ['https://buchhaupt.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
