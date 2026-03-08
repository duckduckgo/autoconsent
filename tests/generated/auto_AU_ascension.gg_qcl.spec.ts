import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_ascension.gg_qcl', ['https://ascension.gg/en'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
