import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_interrail.eu_0', ['https://www.interrail.eu/en'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
