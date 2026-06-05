// import { createClient } from '@supabase/supabase-js'

// const supabaseUrl = 'https://kybamgqjwnolxcpnlumm.supabase.co'
// const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt5YmFtZ3Fqd25vbHhjcG5sdW1tIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA2MzE5NjcsImV4cCI6MjA5NjIwNzk2N30.QzUJebG8pRdbRMpZ1r7RpxXzvaBYHcXpaY8Jph-UKtU'

// export const supabase = createClient(supabaseUrl, supabaseKey)

import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseKey)