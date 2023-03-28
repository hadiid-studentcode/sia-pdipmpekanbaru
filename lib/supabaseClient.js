import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://smilutejpdlobrijsmah.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNtaWx1dGVqcGRsb2JyaWpzbWFoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzkzODM2NzksImV4cCI6MTk5NDk1OTY3OX0.cZO4HesbWl83CF97TQmkhoACLbHpOgQepK6UCudDaB8"
);
