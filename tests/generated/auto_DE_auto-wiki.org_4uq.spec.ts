import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_auto-wiki.org_4uq', ['https://auto-wiki.org/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
