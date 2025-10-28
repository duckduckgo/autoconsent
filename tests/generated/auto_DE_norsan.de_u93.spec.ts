import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_norsan.de_u93', ['https://norsan.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
