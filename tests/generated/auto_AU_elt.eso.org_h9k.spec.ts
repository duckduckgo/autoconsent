import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_elt.eso.org_h9k', ['https://elt.eso.org/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
