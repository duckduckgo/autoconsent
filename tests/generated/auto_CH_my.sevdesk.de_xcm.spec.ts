import generateCMPTests from '../../playwright/runner';
generateCMPTests(
    'auto_CH_my.sevdesk.de_xcm',
    [
        'https://auth.sevdesk.de/authorize?client_id=4tn0hljrq0opuqg5t0j50fc2ua&response_type=code&redirect_uri=https://my.sevdesk.de/_auth/callback&code_challenge=wInEtfb3jzGWqa1JrOpVHJoydAPzOJfd94Ss0dNzTbI&state=P42VTgKK7LqiJlQFmtaIp5TWYRK3oK-EY_uLADRYc5AiA5e42bbnIiuwQC-vnYx8fTRBWc_6robaSRgBOb43BQ&code_challenge_method=S256&scope=oidc',
    ],
    { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] },
);
