import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_en.icp.fr_kii', ['https://en.icp.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
