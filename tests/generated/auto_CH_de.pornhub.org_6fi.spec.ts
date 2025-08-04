import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_de.pornhub.org_6fi', ['https://de.pornhub.org/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
