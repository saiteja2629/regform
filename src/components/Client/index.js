import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://drvqruvvelqrnpleodkd.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRydnFydXZ2ZWxxcm5wbGVvZGtkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTIyMjQyNDAsImV4cCI6MjAyNzgwMDI0MH0.x2Ob1Butf2lvz7yErjrXuVFp0CpSdIWnRp2YWvrurEk";

export const supabase = createClient(supabaseUrl, supabaseKey)