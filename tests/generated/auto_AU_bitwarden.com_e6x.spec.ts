import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_bitwarden.com_e6x', ['https://bitwarden.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
