import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_meshtastic.org_wl2', ['https://meshtastic.org/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
