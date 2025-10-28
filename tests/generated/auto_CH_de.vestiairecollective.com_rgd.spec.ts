import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_de.vestiairecollective.com_rgd', ['https://us.vestiairecollective.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
