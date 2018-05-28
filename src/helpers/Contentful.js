import {createClient} from 'contentful';

const client = createClient({
    space: "usqyvc8xhy60",
    accessToken: "54f1c92b86f652891b38099ebeab464a91554ac7c25b3718337838b4a6958f10"
})
const hoursEntry = "5THCDjVqzCooc00aiYiwOg"
export async function getHours() {
    let hours = await (() => client.getEntry(hoursEntry).then((entry) => entry.fields))()//?
    return await hours;
}
export async function getImage(imageId) {
    let hours = await (() => client.getAsset(imageId).then((entry) => entry.fields).then((fields) => fields.file.url))()//?
    return await hours;
}
export async function getAboutUsBody(contentId) {
    return await client.getEntry(contentId).then((entries) => entries.fields)//?
}

getAboutUsBody("4mXxbCMlQAAeQ68AgIQsqA")//?