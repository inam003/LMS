import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database structure (for reference):
/*
Tables:
1. admission_applications
   - id
   - user_id (references auth.users)
   - full_name
   - email
   - phone
   - previous_education
   - desired_program
   - documents_urls
   - status (pending, approved, rejected)
   - created_at

2. university_accounts
   - id
   - user_id (references auth.users)
   - university_email
   - student_id
   - program_id
   - batch
   - status (active, inactive)
   - created_at

3. programs
   - id
   - name
   - description
   - duration
   - department
   - created_at

4. courses
   - id
   - program_id
   - code
   - name
   - description
   - credit_hours
   - semester
   - created_at

5. course_registrations
   - id
   - student_id (references university_accounts)
   - course_id
   - semester
   - status (enrolled, completed, dropped)
   - created_at

6. assignments
   - id
   - course_id
   - title
   - description
   - due_date
   - total_marks
   - created_at

7. submissions
   - id
   - assignment_id
   - student_id
   - submission_url
   - marks
   - submitted_at
   - created_at

8. quizzes
   - id
   - course_id
   - title
   - duration
   - total_marks
   - start_time
   - end_time
   - created_at
*/
