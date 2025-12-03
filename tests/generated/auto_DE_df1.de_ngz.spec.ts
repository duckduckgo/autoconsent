import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_df1.de_ngz', ['https://df1.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
