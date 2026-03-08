import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_arpmuseum.org_rco', ['https://arpmuseum.org/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
