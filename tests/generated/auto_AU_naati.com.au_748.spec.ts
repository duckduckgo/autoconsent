import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_naati.com.au_748', ['https://www.naati.com.au/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
