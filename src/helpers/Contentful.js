import { createClient } from "contentful";
import _ from "lodash";

const client = createClient({
  space: "XXXXXXXXXXXX",
  accessToken:
    "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
});
const hoursEntry = "5THCDjVqzCooc00aiYiwOg";
export async function getHours() {
  let hours = await (() =>
    client.getEntry(hoursEntry).then(entry => entry.fields))(); //?
  return await hours;
}
export async function getImage(imageId) {
  let hours = await (() =>
    client
      .getAsset(imageId)
      .then(entry => entry.fields)
      .then(fields => fields.file.url))(); //?
  return await hours;
}
export async function getAboutUsBody(contentId) {
  return await client.getEntry(contentId).then(entries => entries.fields); //?
}
export async function getEntries(aboutUsId) {
  return await client.getEntries({ content_type: "allAboutUs" }).then(entries =>
    entries.items.map(item => {
      return item.fields;
    })
  ); //?
}
export async function getRandomMobQuote() {
  const quotes = await client
    .getEntries({ content_type: "mobQuotes" })
    .then(quotes => quotes.items); //?
  return quotes[Math.floor(Math.random() * quotes.length)].fields; //?
}
export async function getOnTap(num) {
  let beers = await client
    .getEntries({ content_type: "beers" })
    .then(({ items }) => items);
  beers = beers.map(({ fields }) => {
    let beer = {
      beerName: fields.beer,
        beerDescription: fields.beerDescription,
        onTap: fields.currentlyOnTap,
        beerStyle: fields.beerStyle,
      beerPhoto: fields.beerPhoto[0].fields.file.url
    };
    return beer;
  });
  return _.take(_.shuffle(beers), num);
}

// getOnTap(1)//?
