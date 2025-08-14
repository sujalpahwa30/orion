import { SignedIn, SignedOut, SignOutButton, SignInButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <h1>Hello, Next.js!</h1>
      <SignedIn>
        <SignOutButton />
      </SignedIn>
      <SignedOut>
        <SignInButton />
      </SignedOut>
    </div>
  );
}
