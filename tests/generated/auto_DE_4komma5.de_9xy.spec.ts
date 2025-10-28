import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_4komma5.de_9xy', ['https://www.4komma5.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
