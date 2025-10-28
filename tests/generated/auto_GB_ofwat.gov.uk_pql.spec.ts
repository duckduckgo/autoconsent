import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_ofwat.gov.uk_pql', ['https://www.ofwat.gov.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
