import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_kirkusreviews.com_mqc', ['https://www.kirkusreviews.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
