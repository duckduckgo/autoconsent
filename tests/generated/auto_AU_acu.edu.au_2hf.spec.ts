import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_acu.edu.au_2hf', ['https://www.acu.edu.au/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['AU'] });
