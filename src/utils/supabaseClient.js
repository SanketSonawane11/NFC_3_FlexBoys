import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://jglyzjmgodvihjdwdcvt.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpnbHl6am1nb2R2aWhqZHdkY3Z0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDM1MjUyMjksImV4cCI6MjAxOTEwMTIyOX0.n6lMNmryXH2NE3J96_eSm-jyEjFQ1e863wf5KndUxHg'

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;