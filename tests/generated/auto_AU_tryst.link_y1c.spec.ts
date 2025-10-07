import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_tryst.link_y1c', ['https://tryst.link/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
