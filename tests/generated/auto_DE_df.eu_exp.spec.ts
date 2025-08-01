import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_df.eu_exp', ['https://www.df.eu/de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
