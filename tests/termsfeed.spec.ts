import generateCMPTests from '../playwright/runner';

generateCMPTests('termsfeed', [
    'https://inspirationaladventures.com/',
    'https://concretecaptain.com/',
    // freeprivacypolicy.com rebuild of the same widget
    'https://guitarapp.com/',
    'https://www.allnet-flatrate.net/',
]);
