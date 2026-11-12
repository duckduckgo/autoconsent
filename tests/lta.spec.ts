import generateCMPTests from '../playwright/runner';

generateCMPTests('lta', [
    'https://www.lta.org.uk/play/ways-to-play/padel/padel-courts-in-britain/',
    'https://www.lta.org.uk/',
    'https://www.ltatennisfoundation.org.uk/',
]);
