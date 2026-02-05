import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_vestiairecollective.com_j5c', ['https://us.vestiairecollective.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
