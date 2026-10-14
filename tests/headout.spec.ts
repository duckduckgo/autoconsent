import generateCMPTests from '../playwright/runner';

const urls = [
    'https://louvremuseum.tickets-paris.fr/fr/',
    'https://www.headout.com/',
    'https://www.hop-on-hop-off-tickets.com/',
    'https://www.billetseiffel.fr/',
];

generateCMPTests('headout', urls, { mobile: true, skipRegions: ['US', 'CA', 'AU'] });
generateCMPTests('headout', urls, { mobile: false, skipRegions: ['US', 'CA', 'AU'] });
