import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_anzsog.edu.au_i3k', ['https://anzsog.edu.au/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
