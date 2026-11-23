import generateCMPTests from '../playwright/runner';

generateCMPTests('passenger-cookie-opt-in', [
    'https://www.nctx.co.uk/',
    'https://www.reading-buses.co.uk/',
    'https://www.cardiffbus.com/',
    'https://www.transdevbus.co.uk/',
]);
