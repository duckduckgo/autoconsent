import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_gesetze.co_zo1', ['https://gesetze.co/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
