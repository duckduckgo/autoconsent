import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_asthma.org.au_s12', ['https://asthma.org.au/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
