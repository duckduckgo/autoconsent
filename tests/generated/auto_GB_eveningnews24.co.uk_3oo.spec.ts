import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_eveningnews24.co.uk_3oo', ['https://www.eveningnews24.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
