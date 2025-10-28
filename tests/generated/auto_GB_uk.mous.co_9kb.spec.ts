import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_uk.mous.co_9kb', ['https://uk.mous.co/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
