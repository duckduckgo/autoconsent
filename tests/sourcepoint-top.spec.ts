import generateCMPTests from '../playwright/runner';

// Top-frame companion to Sourcepoint-frame, covering the messages the frame rule has to
// bail on - chiefly "consent or pay" walls, where the only alternative to consenting is a
// paid subscription. These sites serve such a wall in every region we test.
generateCMPTests(
    'sourcepoint-top',
    [
        'https://www.spiegel.de/',
        'https://www.manager-magazin.de/',
        'https://11freunde.de/',
        'https://www.sueddeutsche.de/',
        'https://www.transfermarkt.com/',
    ],
    {
        testOptIn: false,
        testSelfTest: false,
    },
);

// The Guardian only serves the consent-or-pay wall in the EU/EEA and UK; elsewhere it
// offers a free reject, which Sourcepoint-frame handles and this rule steps back from.
generateCMPTests('sourcepoint-top', ['https://www.theguardian.com/'], {
    onlyRegions: ['GB', 'DE', 'FR', 'IT', 'ES', 'NL', 'PL', 'SE', 'NO', 'DK', 'CH'],
    testOptIn: false,
    testSelfTest: false,
});
