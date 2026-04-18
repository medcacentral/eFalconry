// Referral system — /ref/bobs-plumbing tracks and credits referrals
// Client gets a unique referral link, $20 credit for every paying referral

const referrals = new Map(); // replace with DB in production

export default async function handler(req, res) {
  const { slug } = req.query;

  if (!slug) return res.redirect(302, 'https://efalconry.com');

  // Track the referral click
  const ref = referrals.get(slug) || { clicks: 0, conversions: 0, earned: 0, slug };
  ref.clicks++;
  referrals.set(slug, ref);

  // Redirect to homepage with referral tracking param
  return res.redirect(302, `https://efalconry.com/?ref=${encodeURIComponent(slug)}`);
}
