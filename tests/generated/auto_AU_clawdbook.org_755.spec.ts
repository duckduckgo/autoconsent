import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_clawdbook.org_755', ['https://clawdbook.org/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
