import generateCMPTests from '../../playwright/runner';
generateCMPTests(
    'auto_FR_connexion.mgen.fr_8tr',
    [
        'https://connexion.mgen.fr/auth/realms/mgen//protocol/openid-connect/auth?client_id=mgen-epg-app-oidc&scope=openid&response_type=code&code_challenge_method=S256&redirect_uri=https://mon.espace-personnel.mgen.fr/&code_challenge=bBV_D4gUw1BAiMvOMSQ3DVEmWFnHgdSPeUmUP3ww7i8&state=2UHKLb8lW5zAiVFu5SqUYg6jZJXjdwMdOQ5HWN18&referer=mgen-epg-app-oidc',
    ],
    { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] },
);
