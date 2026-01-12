import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_ammerland.de_7ys', ['https://www.ammerland.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
