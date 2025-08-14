import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_gesetze.co_dfr', ['https://gesetze.co/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
