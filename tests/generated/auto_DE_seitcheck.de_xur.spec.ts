import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_seitcheck.de_xur', ['https://seitcheck.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
