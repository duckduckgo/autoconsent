import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_de.pornhub.org_0', ['https://de.pornhub.org/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
