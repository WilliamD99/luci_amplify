import { deletePost } from "@/actions/actions";
import Post from "@/components/Post";
import UploadFile from "@/components/UploadFile";
import { cookieBasedClient, isAuthenticated } from "@/utils/amplify-utils";

export default async function Home() {
  let userId = (await isAuthenticated()) || false;
  console.log(userId);
  // const { data: posts, errors } = await cookieBasedClient.models.Post.list({
  //   selectionSet: ["title", "id", "owner"],
  //   authMode: "apiKey",
  // });

  // console.log(posts, errors);

  return (
    <main className="">
      Hello
      {/* {posts.map(async (post, index) => (
        <Post key={index} onDelete={deletePost} post={post} userId={userId} />
      ))} */}
      <UploadFile />
    </main>
  );
}
