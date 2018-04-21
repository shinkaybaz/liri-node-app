console.log('this is loaded');

exports.twitter = {
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET, 

// consumer_key: 'IGglzDQ7sitkQk4uKixxzcyJR',
// consumer_secret:	'WoH3wGD1DvXAVvfATenrRhHGGq7G7D8gfefiPHgyXMiBXkCWz3',
// access_token:	'987483826325803009-gvkl2m7hDEEQi1148Px7b4O2SE0SkYW',
// access_token_secret: 'eSDQYXbKBdUznGxJznqsOE92DgydqAnV7PPQQ90uYBImu',
};

exports.spotify = {
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
};

exports.request = {
    key: '32ec1d67',
}
