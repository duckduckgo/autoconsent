import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_de.ids-imaging.com_6tl', ['https://de.ids-imaging.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
