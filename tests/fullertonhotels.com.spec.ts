import generateCMPTests from '../playwright/runner';
generateCMPTests('fullertonhotels.com', ['https://www.fullertonhotels.com/', 'https://www.warwickhotels.com/', 'https://elconvento.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['AU'],
});
