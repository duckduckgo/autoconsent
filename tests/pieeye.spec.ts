import generateCMPTests from '../playwright/runner';

generateCMPTests('pieeye', ['https://noahny.com/'], {});

// The site reloads right after the consent choice, before the self-test can report.
generateCMPTests('pieeye', ['https://www.themeateater.com/'], {
    testSelfTest: false,
});

generateCMPTests('pieeye', ['https://www.paulaschoice.de/'], {
    skipRegions: ['US'],
});

generateCMPTests('pieeye', ['https://tandyleather.com/', 'https://stetson.com/'], {
    onlyRegions: ['US'],
});
