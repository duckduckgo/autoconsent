import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_alt.com_ue4', ['https://alt.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
