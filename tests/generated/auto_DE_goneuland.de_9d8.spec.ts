import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_goneuland.de_9d8', ['https://goneuland.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
