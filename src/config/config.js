import Airtable from "airtable";

Airtable.configure({
  endpointUrl: "https://api.airtable.com",
  apiKey: "keyvWZ3up4HNQODin",
});
export const base = Airtable.base("appub3y7rG18vRxIm");
