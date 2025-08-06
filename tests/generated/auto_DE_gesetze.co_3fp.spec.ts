import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_gesetze.co_3fp', ['https://gesetze.co/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
