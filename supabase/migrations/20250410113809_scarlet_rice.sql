/*
  # Add admin features

  1. Changes
    - Add admin role to profiles
    - Add admin policies for managing users
*/

-- Update profiles table to include admin role
ALTER TABLE profiles
  DROP CONSTRAINT profiles_role_check,
  ADD CONSTRAINT profiles_role_check
    CHECK (role IN ('founder', 'developer', 'admin'));

-- Create admin policies for profiles
CREATE POLICY "Admins can update any profile"
  ON profiles
  FOR UPDATE
  USING (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE id = auth.uid()
      AND role = 'admin'
    )
  );

-- Create admin policies for projects
CREATE POLICY "Admins can manage all projects"
  ON projects
  FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE id = auth.uid()
      AND role = 'admin'
    )
  );

-- Create admin policies for applications
CREATE POLICY "Admins can manage all applications"
  ON applications
  FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE id = auth.uid()
      AND role = 'admin'
    )
  );