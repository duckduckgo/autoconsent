import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_mimikama.org_y15', ['https://www.mimikama.org/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
