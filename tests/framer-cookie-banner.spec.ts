import generateCMPTests from '../playwright/runner';

generateCMPTests(
    'framer-cookie-banner',
    [
        'https://www.framer.com/',
        'https://www.srg.com/',
        'https://www.sequoiacap.com/',
        'https://humix.be/',
        'https://www.justuno.com/',
        'https://rollbar.com/',
        'https://doxy.me/',
    ],
    {},
);
