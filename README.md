# YouTube Data API with Google OAuth 2.0
Display search results from YouTube after authenticating with Google OAuth 2.0

## Notes

### Warning: Query Quotas
The YouTube Data API currently allows only 100 API calls containing `.../youtube/v3/search?part=snippet...` per day

### OAUTH2_CLIENT_ID and OAUTH2_REDIRECT_URI
Customize these settings within `src/config.js`

### Run the localhost server using HTTPS
HTTPS is needed for OAuth. Do the following for HTTPS during local development.
- create the file `.env.local` in the root of the project
- add the line `HTTPS=true`

### Lodash upgrades
- The upgraded `lodash` and `lodash.template` dependencies were added (see `package.json`) because GitHub was flagging the older versions provided via `create-react-app` as having security issues.

