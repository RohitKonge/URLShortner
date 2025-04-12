import { nanoid } from 'nanoid';
import supabase from './supabase';

// Create a short URL
export async function createShortUrl(originalUrl: string): Promise<string | null> {
  try {
    // Check if URL already exists in the database
    const { data: existingUrl } = await supabase
      .from('urls')
      .select('short_id')
      .eq('original_url', originalUrl)
      .single();

    if (existingUrl) {
      return existingUrl.short_id;
    }

    // Generate a new short ID
    const shortId = nanoid(8);
    
    // Store in the database
    const { error } = await supabase
      .from('urls')
      .insert([
        { original_url: originalUrl, short_id: shortId, clicks: 0 }
      ]);

    if (error) throw error;
    
    return shortId;
  } catch (error) {
    console.error('Error creating short URL:', error);
    return null;
  }
}

// Get original URL from short ID and increment click count`
export async function getOriginalUrl(shortId: string): Promise<string | null> {
  try {
    console.log(`Looking up URL for short_id: ${shortId}`);
    
    // First, get the current URL data with .noiCache() to prevent caching
    const { data: urlData, error: urlError } = await supabase
      .from('urls')
      .select('original_url')
      .eq('short_id', shortId)
      .single();

    if (urlError || !urlData) {
      console.error('Error fetching URL:', urlError);
      return null;
    }
    
    // Use a separate update with server-side increment
    const { error: updateError } = await supabase
      .rpc('increment_clicks', { row_id: shortId });

    if (updateError) {
      console.error('Error updating click count:', updateError);
    }
    
    // Return the original URL for redirection
    return urlData.original_url;
  } catch (error) {
    console.error('Error processing URL redirect:', error);
    return null;
  }
}

// Get click count for a short ID
export async function getClickCount(shortId: string): Promise<number> {
  try {
    console.log(`Fetching click count for short_id: ${shortId}`);
    
    // Use a fresh fetch to avoid caching issues
    const { data, error } = await supabase
      .from('urls')
      .select('clicks')
      .eq('short_id', shortId)
      .single();

    if (error) {
      console.error('Error retrieving click count:', error);
      throw error;
    }
    
    console.log('Retrieved data:', data);
    console.log('Clicks value from database:', data?.clicks, 'Type:', typeof data?.clicks);
    
    // Parse the clicks value to ensure it's a number
    const clickCount = parseInt(data?.clicks) || 0;
    console.log(`Returning click count: ${clickCount}`);
    
    return clickCount;
  } catch (error) {
    console.error('Error retrieving click count:', error);
    return 0;
  }
} 