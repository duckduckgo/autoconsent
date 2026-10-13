import generateCMPTests from '../playwright/runner';

generateCMPTests('pmc-privacy-banner', [
    'https://www.theverge.com/news/999211/microsoft-surface-mouse-haptic-feedback',
    'https://www.eater.com/',
    'https://www.sbnation.com/',
    'https://punchdrink.com/',
    'https://philly.eater.com/pop-ups/54719/eater-bang-bang-philly-dinner-2026',
]);
