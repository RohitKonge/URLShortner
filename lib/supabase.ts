import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://fbhehmksflwzzfwnebvv.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZiaGVobWtzZmx3enpmd25lYnZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ0NDI0NzQsImV4cCI6MjA2MDAxODQ3NH0.IrbIDD0D2pN7O-K09sC-1B_dMzEAZWm50roaZQH0irw';

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase; 