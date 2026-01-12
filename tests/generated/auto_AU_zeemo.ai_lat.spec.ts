import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_zeemo.ai_lat', ['https://zeemo.ai/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
