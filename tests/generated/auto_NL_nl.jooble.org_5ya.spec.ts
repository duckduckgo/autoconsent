import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_nl.jooble.org_5ya', ['https://nl.jooble.org/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
