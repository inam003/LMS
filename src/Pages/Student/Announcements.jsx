import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { AnnouncementCard } from "@/components/Students/AnnouncementCard";

const announcements = [
  {
    id: 1,
    type: "overall",
    title: "Campus-wide Internet Maintenance",
    content:
      "The campus-wide internet will be undergoing maintenance on Saturday from 2 AM to 6 AM. Please plan accordingly. This maintenance is necessary to improve our network infrastructure and provide better service to all students and staff. During this time, you may experience intermittent connectivity or complete loss of internet access. We recommend downloading any necessary materials beforehand if you plan to work during these hours. We appreciate your patience and understanding as we work to enhance our campus technology.",
    date: "2023-06-15",
    author: "IT Department",
  },
  {
    id: 2,
    type: "course",
    courseCode: "CS202",
    title: "Project Deadline Extended",
    content:
      "The deadline for the final project has been extended by one week. New due date is July 7th. This extension is in response to the feedback we've received about the complexity of the project and to ensure everyone has ample time to produce their best work. Please use this additional time wisely to refine your projects. If you have any questions or need clarification on any aspect of the project, don't hesitate to reach out during office hours or via email.",
    date: "2023-06-14",
    author: "Prof. Johnson",
  },
  {
    id: 3,
    type: "overall",
    title: "New Library Hours",
    content:
      "Starting next week, the library will be open 24/7 to accommodate students during the exam period. This change will be in effect from June 20th to July 10th. We understand the importance of having a quiet and resourceful environment for studying, especially during this crucial time. Additional staff will be on hand to assist with any research needs or questions you may have. Remember to bring your student ID for after-hours access. Good luck with your exams!",
    date: "2023-06-13",
    author: "Library Services",
  },
  {
    id: 4,
    type: "course",
    courseCode: "CS603",
    title: "Guest Lecture Announcement",
    content:
      "We will have a guest lecture by Dr. Emily Chen on 'Modern Software Architecture' on June 20th at 2 PM in Hall A. Dr. Chen is a renowned expert in cloud-native architectures and has worked with several Fortune 500 companies. This lecture will provide valuable insights into current industry practices and future trends. Attendance is highly recommended for all students, as the concepts discussed will be relevant to your final projects. There will be a Q&A session following the lecture, so come prepared with your questions!",
    date: "2023-06-12",
    author: "Prof. Williams",
  },
  {
    id: 5,
    type: "overall",
    title: "Summer Internship Opportunities",
    content:
      "Several new summer internship opportunities have been posted on the career portal. Don't miss out! These internships span various fields including software development, data science, and IT management. Many of these positions offer the possibility of full-time employment upon graduation. To apply, log in to the career portal and submit your updated resume and cover letter. The career services office is available for resume reviews and interview preparation. Don't delay, as many of these opportunities have approaching deadlines!",
    date: "2023-06-11",
    author: "Career Services",
  },
  {
    id: 6,
    type: "course",
    courseCode: "PH101",
    title: "Midterm Exam Rescheduled",
    content:
      "Due to unforeseen circumstances, the midterm exam for Physics 101 has been rescheduled to June 25th at 10 AM in Hall C. We apologize for any inconvenience caused and encourage you to use this extra time to review the material. Please reach out if you need any further clarifications on the exam topics.",
    date: "2023-06-10",
    author: "Prof. Davis",
  },
  {
    id: 7,
    type: "overall",
    title: "Cafeteria Renovations",
    content:
      "The campus cafeteria will undergo renovations starting on June 22nd and will remain closed until July 1st. During this time, food services will be available at the temporary food trucks stationed outside the Student Center. We appreciate your patience during the construction period and look forward to unveiling the new and improved cafeteria!",
    date: "2023-06-09",
    author: "Facilities Management",
  },
  {
    id: 8,
    type: "course",
    courseCode: "BIO301",
    title: "Lab Schedule Update",
    content:
      "The lab schedule for BIO301 has been updated. Starting June 18th, labs will be held on Wednesdays and Fridays from 1 PM to 4 PM in Lab 5B. Please make sure to review the updated schedule on the course portal and plan accordingly. Attendance is mandatory, and lab assignments will be graded.",
    date: "2023-06-08",
    author: "Prof. Carter",
  },
  {
    id: 9,
    type: "overall",
    title: "Campus Shuttle Service",
    content:
      "The campus shuttle service will be extending its hours during the exam period. From June 20th to July 10th, shuttles will run until 2 AM to accommodate students studying late at the library. This service aims to ensure the safety and convenience of all students during this busy time. Check the shuttle schedule on the student portal for exact times and routes.",
    date: "2023-06-07",
    author: "Transportation Services",
  },
  {
    id: 10,
    type: "course",
    courseCode: "ENGL102",
    title: "Essay Submission Guidelines",
    content:
      "Please be reminded that the final essay for English 102 must be submitted via the course portal by June 20th, 11:59 PM. Late submissions will not be accepted. Make sure to follow the provided guidelines, including proper citation format and word count. If you have any questions, reach out to your TA or schedule a meeting during office hours.",
    date: "2023-06-06",
    author: "Prof. Thompson",
  },
];

const Announcements = () => {
  return (
    <div className="mt-10 mx-9 md:ml-64">
      <h1 className="text-[1.75rem] font-medium">Announcements</h1>
      <Card className="w-full max-w-4xl mx-auto my-6">
        <CardContent className="pt-6">
          <div className="space-y-4">
            {announcements.map((announcement) => (
              <AnnouncementCard
                key={announcement.id}
                announcement={announcement}
              />
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Announcements;
