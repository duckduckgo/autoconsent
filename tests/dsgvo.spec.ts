import generateCMPTests from '../playwright/runner';

generateCMPTests('WP DSGVO Tools', [
    'https://shop.fellhof.com/en/',
    'https://energiedirect-bayern.de/',
    'https://verkehrsdienste.at/',
    // popup without an "accept nothing" button
    'https://vfc-plauen.de/',
    'https://schluessel-mueller.de/',
]);
