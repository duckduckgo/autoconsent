import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_de.jooble.org_8u8', ['https://de.jooble.org/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
