import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_autovio.de_zxg', ['https://autovio.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
