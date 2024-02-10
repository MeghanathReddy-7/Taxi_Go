import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (<div className="bg-gray-300 flex justify-center items-center h-screen">
    <SignUp />
  </div>);
}
