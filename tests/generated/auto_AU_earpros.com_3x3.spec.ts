import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_earpros.com_3x3', ['https://www.earpros.com/au'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
