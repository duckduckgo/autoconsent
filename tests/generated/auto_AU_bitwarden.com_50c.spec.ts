import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_bitwarden.com_50c', ['https://bitwarden.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['AU'] });
