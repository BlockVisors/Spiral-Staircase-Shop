import Link from 'next/link';
import { UserButton, auth } from '@clerk/nextjs';
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignInButton,
} from "@clerk/nextjs";
const ClerkHeader = async () => {
  const { userId } = auth();

  return (
    <nav className='flex items-center justify-between px-4 py-2'>
      <div className='flex items-center'>
      {/*   <Link href='/'>
          <div className='text-lg font-bold text-white uppercase'>
            Clerk App
          </div>
        </Link>
      </div> */}
      {/* <div className='flex items-center text-white'>
        {!userId && (
          <>
            <Link
              href='sign-in'
              className='text-gray-300 hover:text-white mr-4'
            >
              Sign In
            </Link>
            <Link
              href='sign-up'
              className='text-gray-300 hover:text-white mr-4'
            >
              Sign Up
            </Link>
          </>
        )}
        {userId && (
          <Link href='profile' className='text-gray-300 hover:text-white mr-4'>
            Profile
          </Link>
        )}
        <div className='ml-auto'>
          <UserButton afterSignOutUrl='/' />
        </div>*/}
      </div> 
        <SignedIn>
        {/* Mount the UserButton component */}
        <UserButton afterSignOutUrl="/"/>
      </SignedIn>
      <SignedOut>
        {/* Signed out users get sign in button */}
        <SignInButton />
      </SignedOut>
    </nav>
  );
};

export default ClerkHeader;