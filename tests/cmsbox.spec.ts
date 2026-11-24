import generateCMPTests from '../playwright/runner';

// declining submits a form and reloads the page, so there is no stable state to self-test
generateCMPTests('cmsbox', ['https://www.gstaadmenuhinfestival.ch/en', 'https://www.vivanta.ch/'], {
    testSelfTest: false,
});
generateCMPTests('cmsbox', ['https://www.abenco.ch/'], {
    testSelfTest: false,
    onlyRegions: ['CH'],
});
