import generateCMPTests from '../../playwright/runner';
generateCMPTests(
    'auto_FR_connexion.mgen.fr_16t',
    [
        'https://connexion.mgen.fr/auth/realms/mgen//protocol/openid-connect/auth?client_id=mgen-epg-app-oidc&scope=openid&response_type=code&code_challenge_method=S256&redirect_uri=https://mon.espace-personnel.mgen.fr/&code_challenge=iXcJNmZ8iJGxINA0u2zIwYtveP8El3LCvf5yqhBi5WQ&state=fEBBLxOr25ZEVy56YQhxjEB2dHBH8MzC64wLeEVW&referer=mgen-epg-app-oidc',
    ],
    { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] },
);
