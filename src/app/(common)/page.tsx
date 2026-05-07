import Blog from "@/components/home/blog";
import Hero from "@/components/hero/hero";
import { userService } from "@/services/user.service";

export default async function Home() {
  const { data } = await userService.getSession();

  console.log(data);

  return (
    <>
      <Hero />
      <Blog />
    </>
  );
}
