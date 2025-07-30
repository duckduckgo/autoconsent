import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_weforum.org_v34', ['https://www.weforum.org/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
