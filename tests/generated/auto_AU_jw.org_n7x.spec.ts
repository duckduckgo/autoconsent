import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_jw.org_n7x', ['https://www.jw.org/en/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
