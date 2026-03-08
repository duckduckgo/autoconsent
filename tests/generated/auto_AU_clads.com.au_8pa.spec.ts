import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_clads.com.au_8pa', ['https://clads.com.au/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
