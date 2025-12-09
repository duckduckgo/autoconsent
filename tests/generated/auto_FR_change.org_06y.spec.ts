import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_change.org_06y', ['https://www.change.org/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
