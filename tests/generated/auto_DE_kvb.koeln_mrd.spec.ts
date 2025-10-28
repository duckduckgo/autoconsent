import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_kvb.koeln_mrd', ['https://www.kvb.koeln/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
