import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_repost.aws_u1p', ['https://repost.aws/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
