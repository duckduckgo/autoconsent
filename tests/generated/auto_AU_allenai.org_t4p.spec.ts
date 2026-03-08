import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_allenai.org_t4p', ['https://allenai.org/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
