import generateCMPTests from '../playwright/runner';

generateCMPTests('sg-cookies', [
    // Reject button only in the hidden settings modal
    'https://www.thuisbatterij-actie.nl/',
    'https://www.nationaalbespaarcentrum.nl/',
    'https://www.bestewarmtepomp.nl/',
    'https://www.satt.cz/',
    'https://epassage24.de/',
    'https://www.babetkovo.sk/',
    // Reject button in the bar
    'https://www.geneva-arena.ch/',
]);

// These sites reload the page after opt-out
generateCMPTests(
    'sg-cookies',
    [
        // Reject button in the bar
        'https://www.buywithconfidence.gov.uk/',
        'https://www.luminsmart.com/',
        // Only a settings modal
        'https://www.zengo.eu/',
        'https://www.tanteanna.de/',
        'https://ceceurope.org/',
    ],
    { testSelfTest: false },
);
