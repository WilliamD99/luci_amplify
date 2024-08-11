import UploadFile from "@/components/UploadFile";
import { cookieBasedClient, isAuthenticated } from "@/utils/amplify-utils";
import PageClient from "./client";

export default async function Home() {
  let userData = (await isAuthenticated()) || false;
  // const { data: posts, errors } = await cookieBasedClient.models.Post.list({
  //   selectionSet: ["title", "id", "owner"],
  //   authMode: "apiKey",
  // });
  // console.log(posts, errors);

  return <main className="w-full">{/* <PageClient user={userData} /> */}</main>;
}
