'use client';
import { SignOutButton } from '@clerk/nextjs';
import { useToast } from '../ui/use-toast';
import Link from 'next/link';

//user sees only segments of the navbar when not logged in
function SignOutLink() {
  const { toast } = useToast();
  const handleLogout = () => {
    toast({ description: 'Logging Out...' });
  };
  return (
    <SignOutButton>
      <Link href='/' className='w-full text-left' onClick={handleLogout}>
        Logout
      </Link>
    </SignOutButton>
  );
}
export default SignOutLink;