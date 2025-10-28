import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_wanderweib.de_134', ['https://wanderweib.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
