import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_uk.muji.eu_zdx', ['https://uk.muji.eu/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
