import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_careers.abc.net.au_aao', ['https://careers.abc.net.au/jobs/search'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
