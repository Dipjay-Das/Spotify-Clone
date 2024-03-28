export const authEndpoint = "https://accounts.spotify.com/authorize";
const redirectUrl = "http://localhost:3000/";
const clientId = '8e75b2ea36254224b5d81b5895eb8235';

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];
export const getTokenFromUrl = () => {
    // #access_token=BQA6eJ2gKPwqkBO9XssdFB5NcLVW6UGHKcC834YaPdxoU3EHqkr1TkokmGkp7aZgS4Bl79VD7wjxiw1nZ5TTgxeQGv1xkt9vnLtYHSMxUm2WdWsuo1nnjgvoN-ZkhXsCcpeTJ2Dq2UPqqSSM7W3fAZ0JTd57Mbmgkt8EyP8IjLTjsuz5uN6EjhxiINB94gPGRZVdJGVNVjuanIK30fKX&token_type=Bearer&expires_in=3600
    return window.location.hash

        // access_token=BQA6eJ2gKPwqkBO9XssdFB5NcLVW6UGHKcC834YaPdxoU3EHqkr1TkokmGkp7aZgS4Bl79VD7wjxiw1nZ5TTgxeQGv1xkt9vnLtYHSMxUm2WdWsuo1nnjgvoN-ZkhXsCcpeTJ2Dq2UPqqSSM7W3fAZ0JTd57Mbmgkt8EyP8IjLTjsuz5uN6EjhxiINB94gPGRZVdJGVNVjuanIK30fKX&token_type=Bearer&expires_in=3600
        .substring(1)

        // 0: "access_token=BQA6eJ2gKPwqkBO9XssdFB5NcLVW6UGHKcC834YaPdxoU3EHqkr1TkokmGkp7aZgS4Bl79VD7wjxiw1nZ5TTgxeQGv1xkt9vnLtYHSMxUm2WdWsuo1nnjgvoN-ZkhXsCcpeTJ2Dq2UPqqSSM7W3fAZ0JTd57Mbmgkt8EyP8IjLTjsuz5uN6EjhxiINB94gPGRZVdJGVNVjuanIK30fKX"
        // 1: "token_type=Bearer"
        // 2: "expires_in=3600"
        .split('&')

        .reduce((initial, item) => {
            // 0: "expires_in"
            // 1: "3600"
            let parts = item.split('=');

            // access_token: "BQA6eJ2gKPwqkBO9XssdFB5NcLVW6UGHKcC834YaPdxoU3EHqkr1TkokmGkp7aZgS4Bl79VD7wjxiw1nZ5TTgxeQGv1xkt9vnLtYHSMxUm2WdWsuo1nnjgvoN-ZkhXsCcpeTJ2Dq2UPqqSSM7W3fAZ0JTd57Mbmgkt8EyP8IjLTjsuz5uN6EjhxiINB94gPGRZVdJGVNVjuanIK30fKX"
            // expires_in: "3600"
            // token_type: "Bearer"
            initial[parts[0]] =
                decodeURIComponent(parts[1]);
            return initial;
        }, {})
}

export const accessUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scopes.join(
    "%20"
)}&response_type=token&show_dialog=true`;