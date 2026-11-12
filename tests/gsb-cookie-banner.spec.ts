import generateCMPTests from '../playwright/runner';

generateCMPTests(
    'gsb-cookie-banner',
    [
        'https://www.bundesfinanzministerium.de/',
        'https://www.ostbeauftragte.de/',
        'https://www.mitgeldundverstand.de/',
        'https://www.wegweiser-demenz.de/',
        'https://www.demokratie-leben.de/',
        'https://www.erfolgsfaktor-familie.de/',
    ],
    {},
);
