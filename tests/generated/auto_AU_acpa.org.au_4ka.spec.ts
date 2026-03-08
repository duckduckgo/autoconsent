import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_acpa.org.au_4ka', ['https://acpa.org.au/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
