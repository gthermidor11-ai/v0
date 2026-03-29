-- Create kiosk reservations table
CREATE TABLE IF NOT EXISTS kiosk_reservations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  organization TEXT,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  description TEXT,
  technical_needs TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create volunteer applications table
CREATE TABLE IF NOT EXISTS volunteer_applications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  availability TEXT NOT NULL,
  interests TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create contact messages table
CREATE TABLE IF NOT EXISTS contact_messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create donations table for tracking
CREATE TABLE IF NOT EXISTS donations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  stripe_session_id TEXT,
  amount INTEGER NOT NULL,
  category TEXT NOT NULL,
  donor_email TEXT,
  status TEXT DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS on all tables
ALTER TABLE kiosk_reservations ENABLE ROW LEVEL SECURITY;
ALTER TABLE volunteer_applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE donations ENABLE ROW LEVEL SECURITY;

-- Allow public inserts (forms are public)
CREATE POLICY "Allow public inserts on kiosk_reservations" 
  ON kiosk_reservations FOR INSERT 
  WITH CHECK (true);

CREATE POLICY "Allow public inserts on volunteer_applications" 
  ON volunteer_applications FOR INSERT 
  WITH CHECK (true);

CREATE POLICY "Allow public inserts on contact_messages" 
  ON contact_messages FOR INSERT 
  WITH CHECK (true);

CREATE POLICY "Allow public inserts on donations" 
  ON donations FOR INSERT 
  WITH CHECK (true);

-- Allow service role to read all
CREATE POLICY "Allow service role to read kiosk_reservations" 
  ON kiosk_reservations FOR SELECT 
  USING (true);

CREATE POLICY "Allow service role to read volunteer_applications" 
  ON volunteer_applications FOR SELECT 
  USING (true);

CREATE POLICY "Allow service role to read contact_messages" 
  ON contact_messages FOR SELECT 
  USING (true);

CREATE POLICY "Allow service role to read donations" 
  ON donations FOR SELECT 
  USING (true);
