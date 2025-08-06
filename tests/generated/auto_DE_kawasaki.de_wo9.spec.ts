import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_kawasaki.de_wo9', ['https://www.kawasaki.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
