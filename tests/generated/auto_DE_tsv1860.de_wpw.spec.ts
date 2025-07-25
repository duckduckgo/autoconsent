import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_tsv1860.de_wpw', ['https://www.tsv1860.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
