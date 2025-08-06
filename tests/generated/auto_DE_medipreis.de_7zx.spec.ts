import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_medipreis.de_7zx', ['https://www.medipreis.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
