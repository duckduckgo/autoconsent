import generateCMPTests from '../playwright/runner';

// Top-frame companion to Sourcepoint-frame, covering the popups that the frame rule has to
// bail on — chiefly "consent or pay" walls, where the only alternative to consenting is a
// paid subscription. These sites serve such a wall in every region.
generateCMPTests('sourcepoint-top', ['https://www.spiegel.de/', 'https://www.manager-magazin.de/', 'https://11freunde.de/'], {
    testOptIn: false,
    testSelfTest: false,
});

// German and UK publishers whose Sourcepoint notice the frame rule leaves in place.
generateCMPTests('sourcepoint-top', ['https://www.sueddeutsche.de/', 'https://www.tvspielfilm.de/'], {
    skipRegions: ['US'],
    testOptIn: false,
    testSelfTest: false,
});
