import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_oscr.org.uk_jsn', ['https://www.oscr.org.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
