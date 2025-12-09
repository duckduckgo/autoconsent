import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_bundeswehr.de_wf9', ['https://www.bundeswehr.de/de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
