import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_biblio.co.uk_0', ['https://biblio.co.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
