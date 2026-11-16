import generateCMPTests from '../playwright/runner';

generateCMPTests('secureprivacy', ['https://www.fullertonhotels.com/', 'https://www.coasthotels.com/', 'https://www.amplify.com/'], {
    testOptIn: false,
    testSelfTest: false,
});

generateCMPTests('secureprivacy', ['https://m.cricbuzz.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});
