import generateCMPTests from '../playwright/runner';

// Sites that stack a legacy PrimeBox-style #cookie-bar notice on top of the tri-table CMP.
generateCMPTests(
    'tri-table-stacked',
    ['https://shinden.pl/episode/61872-tensei-shitara-slime-datta-ken-3rd-season/view/231781', 'https://kreskowki.tv/'],
    {},
);
