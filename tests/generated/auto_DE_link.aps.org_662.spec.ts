import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_link.aps.org_662', ['https://link.aps.org/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
