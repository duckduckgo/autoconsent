import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_tryst.link_vsl', ['https://tryst.link/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
