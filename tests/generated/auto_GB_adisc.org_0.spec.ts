import generateCMPTests from '../../playwright/runner';
generateCMPTests(
    'auto_GB_adisc.org_0',
    ['https://www.adisc.org/forum/misc/cookies?update=1&reject=1&t=1755041761%2C5c96c647160b51fbf32845b29970fbb2'],
    { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] },
);
