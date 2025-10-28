import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_redgifs.com_fqf', ['https://www.redgifs.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
