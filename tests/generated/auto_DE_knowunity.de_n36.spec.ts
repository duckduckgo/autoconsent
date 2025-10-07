import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_knowunity.de_n36', ['https://knowunity.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
