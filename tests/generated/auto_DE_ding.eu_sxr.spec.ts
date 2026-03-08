import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_ding.eu_sxr', ['https://ding.eu/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
