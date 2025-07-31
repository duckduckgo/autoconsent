import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_bitwarden.com_7mk', ['https://bitwarden.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['AU'] });
