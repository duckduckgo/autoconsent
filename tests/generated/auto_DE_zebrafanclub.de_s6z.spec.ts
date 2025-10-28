import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_zebrafanclub.de_s6z', ['https://zebrafanclub.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
