import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_prusa3d.com_afm', ['https://www.prusa3d.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
