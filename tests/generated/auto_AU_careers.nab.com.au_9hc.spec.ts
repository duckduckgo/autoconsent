import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_careers.nab.com.au_9hc', ['https://careers.nab.com.au/jobs/search'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
