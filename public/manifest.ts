import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "LuciTalk",
    description: "Real-time chat application",
    display: "standalone",
  };
}
