import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_au.jooble.org_egj', ['https://au.jooble.org/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
