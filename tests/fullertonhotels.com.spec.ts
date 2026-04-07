import generateCMPTests from '../playwright/runner';
generateCMPTests('fullertonhotels.com', ['https://www.fullertonhotels.com/', 'https://marriottsalalahresort.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['AU'],
});
