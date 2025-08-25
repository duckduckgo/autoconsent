import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_gdp.de_zox', ['https://www.gdp.de/bund/de'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
