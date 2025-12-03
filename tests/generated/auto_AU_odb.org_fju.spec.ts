import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_odb.org_fju', ['https://odb.org/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
