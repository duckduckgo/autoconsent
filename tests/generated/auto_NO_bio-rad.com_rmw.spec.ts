import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_bio-rad.com_rmw', ['https://www.bio-rad.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
