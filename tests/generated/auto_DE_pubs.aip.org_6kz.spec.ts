import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_pubs.aip.org_6kz', ['https://pubs.aip.org/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
