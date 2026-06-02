import generateCMPTests from '../playwright/runner';

generateCMPTests(
    'police-uk',
    [
        'https://www.merseyside.police.uk/',
        'https://www.merseyside.police.uk/contact/af/contact-us-beta/contact-us/forms/contact-us-about-something-else/Complete',
        'https://www.met.police.uk/',
        'https://www.gmp.police.uk/',
        'https://www.btp.police.uk/',
    ],
    {
        skipRegions: ['US', 'FR', 'DE'],
    },
);
