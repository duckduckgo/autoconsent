import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_jw.org_5f6', ['https://www.jw.org/en/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
