import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_screen.studio_z0u', ['https://screen.studio/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
