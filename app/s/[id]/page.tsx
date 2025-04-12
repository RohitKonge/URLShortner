import { redirect } from 'next/navigation';
import { getOriginalUrl } from '@/lib/shortener';

// Define the type for params
interface PageProps {
  params: {
    id: string;
  };
}

export default async function ShortUrlRedirect({ params }: PageProps) {
  const { id } = params;
  
  // Get the original URL from the short ID
  const originalUrl = await getOriginalUrl(id);
  
  // If the URL is found, redirect to it
  if (originalUrl) {
    redirect(originalUrl);
  }
  
  // If the URL is not found, redirect to the home page
  redirect('/');
} 