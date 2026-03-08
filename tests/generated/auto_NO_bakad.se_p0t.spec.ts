import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_bakad.se_p0t', ['https://bakad.se/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
