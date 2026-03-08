import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_alpakashop.de_9l6', ['https://alpakashop.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
