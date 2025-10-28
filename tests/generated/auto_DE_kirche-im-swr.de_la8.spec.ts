import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_kirche-im-swr.de_la8', ['https://www.kirche-im-swr.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
