import generateCMPTests from '../../playwright/runner';
generateCMPTests(
    'auto_FR_mon.espace-personnel.mgen.fr_wml',
    [
        'https://connexion.mgen.fr/auth/realms/mgen//protocol/openid-connect/auth?client_id=mgen-epg-app-oidc&scope=openid&response_type=code&code_challenge_method=S256&redirect_uri=https://mon.espace-personnel.mgen.fr/&code_challenge=tNZjls5YCqiMKQPMDlVhL1plt_A3VpZ2-oZxRLRWNfs&state=DagHdJHu18K7acLoSzufIJh6NKYPV0IMfWnVNHeB&referer=mgen-epg-app-oidc',
    ],
    { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] },
);
