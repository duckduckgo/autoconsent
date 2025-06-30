import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_earpros.com_onj', ['https://www.earpros.com/au'], { testOptIn: false, testSelfTest: false, onlyRegions: ['AU'] });
