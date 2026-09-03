import generateCMPTests from '../playwright/runner';

// SPIEGEL Gruppe titles show a Sourcepoint "consent or pay" wall in every region, where
// the only alternative to consenting is a paid subscription. A cosmetic rule dismisses it
// by hiding the Sourcepoint container and undoing the scroll lock.
generateCMPTests('spiegel-gruppe', ['https://www.spiegel.de/', 'https://www.manager-magazin.de/', 'https://11freunde.de/'], {
    testOptIn: false,
    testSelfTest: false,
});
