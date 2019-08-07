# YouTube Data API Homework
Display search results using YouTube Data API v3 with Google OAuth 2.0

## Notes

### Lodash upgrades
- The upgraded `lodash` and `lodash.template` dependencies were added (see `package.json`) because GitHub was flagging the older versions provided via `create-react-app` as having security issues.

### Run the localhost server using HTTPS
HTTPS is needed for OAuth. Do the following for HTTPS during local development.
- create the file `.env.local` in the root of the project
- add the line `HTTPS=true`
