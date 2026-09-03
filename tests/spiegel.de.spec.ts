import generateCMPTests from '../playwright/runner';

// SPIEGEL shows a Sourcepoint "consent or pay" wall in every region, where the only
// alternative to consenting is the paid "Werbefrei lesen" subscription. A cosmetic rule
// dismisses it by hiding the Sourcepoint container and undoing the scroll lock.
generateCMPTests('spiegel.de', ['https://www.spiegel.de/'], {
    testOptIn: false,
    testSelfTest: false,
});
