import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_eclipse.org_bur', ['https://www.eclipse.org/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
