import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_chiswickhouseandgardens.org.uk_yat', ['https://chiswickhouseandgardens.org.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
