import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_bricks4kidz.au_y1x', ['https://bricks4kidz.au/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
