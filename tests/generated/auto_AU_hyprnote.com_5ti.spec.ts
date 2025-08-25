import generateCMPTests from '../../playwright/runner';
generateCMPTests(
    'auto_AU_hyprnote.com_5ti',
    [
        'https://hyprnote.com/?utm_medium=email-media-newsletter&amp;utm_source=the-rundown-ai&amp;utm_campaign=creator&amp;utm_content=paid&amp;utm_term=8-22-2025&amp;_bhlid=a1404daf1b22fbb5f9e3a66e10f82c10b9968a02',
    ],
    { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] },
);
