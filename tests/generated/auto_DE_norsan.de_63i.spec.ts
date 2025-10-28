import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_norsan.de_63i', ['https://norsan.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
