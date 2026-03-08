import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_bib.hm.edu_134', ['https://bib.hm.edu/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
