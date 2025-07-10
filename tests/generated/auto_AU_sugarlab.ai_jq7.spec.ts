import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_sugarlab.ai_jq7', ['https://www.sugarlab.ai/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['AU'] });
