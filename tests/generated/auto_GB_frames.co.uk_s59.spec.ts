import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_frames.co.uk_s59', ['https://www.frames.co.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
