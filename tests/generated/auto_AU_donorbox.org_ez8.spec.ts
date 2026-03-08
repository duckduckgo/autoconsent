import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_donorbox.org_ez8', ['https://donorbox.org/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
