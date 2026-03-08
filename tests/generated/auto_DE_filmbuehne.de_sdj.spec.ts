import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_filmbuehne.de_sdj', ['https://filmbuehne.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
