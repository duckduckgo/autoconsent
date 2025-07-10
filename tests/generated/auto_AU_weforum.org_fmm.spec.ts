import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_weforum.org_fmm', ['https://www.weforum.org/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['AU'] });
