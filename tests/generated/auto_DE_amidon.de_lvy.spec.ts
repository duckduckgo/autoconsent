import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_amidon.de_lvy', ['http://www.amidon.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
