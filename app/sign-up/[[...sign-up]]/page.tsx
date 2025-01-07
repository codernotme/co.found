import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-black">
      <SignUp 
        appearance={{
          elements: {
            rootBox: "bg-gray-900 p-8 rounded-lg shadow-lg",
            card: "bg-transparent",
            headerTitle: "text-cyan-400 text-2xl font-bold",
            formButtonPrimary: "bg-cyan-400 hover:bg-cyan-500 text-black",
            formFieldInput: "bg-gray-800 text-white border-gray-700",
            formFieldLabel: "text-gray-300",
            footerActionLink: "text-cyan-400 hover:text-cyan-300",
          },
        }}
      />
    </div>
  );
}

