import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_castbox.fm_8uk', ['https://castbox.fm/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
