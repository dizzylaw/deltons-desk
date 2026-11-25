// Delton's Desk settings. Edit the two lines marked PASTE, then save (on GitHub: "Commit changes").
window.DESK_CONFIG = {
  // Supabase > Project Settings > Data API (or Connect): the Project URL, like https://abcdefghijklmnop.supabase.co
  supabaseUrl: "https://pypgysikbzwabeknwjaa.supabase.co",
  // Supabase > Project Settings > API Keys: the Publishable key (starts with sb_publishable_). Never the secret key.
  supabaseKey: "sb_publishable_pWbK87OkUEsLbJWEub10xA_QmOVANLh",

  // Optional nicknames shown instead of account numbers, e.g. { "12345678": "Main_Live", "87654321": "Gold_Demo" }.
  // A nickname containing "demo" marks that account as a demo account.
  accountNames: {},
  // Optional names for EAs by magic number, e.g. { "1001": "TrendRider" }. Otherwise the EA name comes from the trade comment.
  magicNames: {},
  // Optional: name EAs by account and symbol, whatever the trade comment says,
  // e.g. [{ account: "12345678", symbol: "EURUSD", name: "EurShore" }]. Leave out account or symbol to match any.
  eaRules: [
    { account: "1700140853", symbol: "EURUSD", name: "EurShore" },
    { account: "1700140853", symbol: "AUDCAD", name: "GK" }
  ]
};
