
// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://dehdejmqdbvonoipwbtg.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRlaGRlam1xZGJ2b25vaXB3YnRnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQzOTU0MzcsImV4cCI6MjA1OTk3MTQzN30.uMPSc35cPBn2syj1NcUfeW7_1L80x-a5ZOGNUANt5Tg";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
