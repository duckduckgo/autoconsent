import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_dl.acm.org_jfw', ['https://dl.acm.org/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['AU'] });
