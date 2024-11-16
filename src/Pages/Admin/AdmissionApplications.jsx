import { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase';

const AdmissionApplications = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    try {
      const { data, error } = await supabase
        .from('admission_applications')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setApplications(data);
    } catch (error) {
      console.error('Error fetching applications:', error);
      alert('Error fetching applications');
    } finally {
      setLoading(false);
    }
  };

  const handleApplicationStatus = async (applicationId, status) => {
    try {
      // Update application status
      const { error: updateError } = await supabase
        .from('admission_applications')
        .update({ status })
        .eq('id', applicationId);

      if (updateError) throw updateError;

      if (status === 'approved') {
        // Get application details
        const { data: applicationData, error: fetchError } = await supabase
          .from('admission_applications')
          .select('*')
          .eq('id', applicationId)
          .single();

        if (fetchError) throw fetchError;

        // Generate university email
        const universityEmail = `${applicationData.full_name.toLowerCase().replace(/\s+/g, '.')}@university.edu`;
        
        // Create university account
        const { error: accountError } = await supabase
          .from('university_accounts')
          .insert([
            {
              user_id: applicationData.user_id,
              university_email: universityEmail,
              student_id: `STD${Date.now().toString().slice(-6)}`,
              program_id: applicationData.desired_program,
              status: 'active'
            }
          ]);

        if (accountError) throw accountError;

        // Here you would typically trigger an email to the student with their credentials
        // For now, we'll just show an alert
        alert(`Application approved! University email: ${universityEmail}`);
      }

      // Refresh applications list
      fetchApplications();
    } catch (error) {
      console.error('Error updating application:', error);
      alert('Error updating application');
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mt-10 mx-9 md:ml-64 p-6">
      <h2 className="text-2xl font-bold mb-6">Admission Applications</h2>
      <div className="grid gap-6">
        {applications.map((application) => (
          <div 
            key={application.id}
            className="bg-white p-6 rounded-lg shadow"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-semibold">{application.full_name}</h3>
                <p className="text-gray-600">{application.email}</p>
                <p className="text-gray-600">Program: {application.desired_program}</p>
                <div className="mt-4">
                  <h4 className="font-semibold">Previous Education</h4>
                  <p className="text-gray-700">{application.previous_education}</p>
                </div>
                <div className="mt-4">
                  <h4 className="font-semibold">Documents</h4>
                  <ul className="list-disc list-inside">
                    {application.documents_urls.map((doc, index) => (
                      <li key={index}>
                        <a 
                          href={supabase.storage.from('admission-documents').getPublicUrl(doc).data.publicUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 hover:underline"
                        >
                          Document {index + 1}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="flex gap-2">
                {application.status === 'pending' && (
                  <>
                    <button
                      onClick={() => handleApplicationStatus(application.id, 'approved')}
                      className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                    >
                      Approve
                    </button>
                    <button
                      onClick={() => handleApplicationStatus(application.id, 'rejected')}
                      className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                    >
                      Reject
                    </button>
                  </>
                )}
                {application.status !== 'pending' && (
                  <span className={`px-3 py-1 rounded ${
                    application.status === 'approved' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {application.status.charAt(0).toUpperCase() + application.status.slice(1)}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdmissionApplications;