import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_reviews.io_7j4', ['https://www.reviews.io/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
