import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://leeixgopkikhqkskijqv.supabase.co'
const supabaseKey = 'sb_publishable_e2yS5NfI7qkPFATNKgxdPw_efXg1n__'

export const supabase = createClient(supabaseUrl, supabaseKey)