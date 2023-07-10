import { createClient } from '@supabase/supabase-js'

export const supabase = createClient('https://rvxsxmtqdslghtbfucuf.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ2eHN4bXRxZHNsZ2h0YmZ1Y3VmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODg5MzU5OTEsImV4cCI6MjAwNDUxMTk5MX0.hFqKfds0wEIwnktM1xbwVXVzCtocVSvHAysEt4TuiZ8')