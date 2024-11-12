import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import instructor from "../../../public/instructor.jpg";
import cardAssignment from "../../../public/cardAssignment.png";
import gdb from "../../../public/gdb.png";
import quiz from "../../../public/quiz.png";
import announcements from "../../../public/announcements.png";

const Courses = () => {
  const courses = [
    {
      title: "CS408 - Human Computer Interaction",
      description: "Computer Science/Information Technology",
      creditHour: "3 Credit Hour(s)",
    },
    {
      title: "CS510 - Software Requirements and Specifications",
      description: "Computer Science/Information Technology",
      creditHour: "3 Credit Hour(s)",
    },
    {
      title: "CS511 - Web Engineering",
      description: "Computer Science/Information Technology",
      creditHour: "3 Credit Hour(s)",
    },
    {
      title: "MCM301 - Communication skills",
      description: "Computer Science/Information Technology",
      creditHour: "3 Credit Hour(s)",
    },
    {
      title: "MTH601 - Operations Research",
      description: "Computer Science/Information Technology",
      creditHour: "3 Credit Hour(s)",
    },
    {
      title: "CS614 - Data Warehousing",
      description: "Computer Science/Information Technology",
      creditHour: "3 Credit Hour(s)",
    },
  ];

  const cardFooter = [
    {
      icon: <img src={cardAssignment} />,
      title: "Assignments",
    },
    {
      icon: <img src={gdb} />,
      title: "GDB",
    },
    {
      icon: <img src={quiz} />,
      title: "Quiz",
    },
    {
      icon: <img src={announcements} />,
      title: "Announcements",
    },
  ];

  return (
    <div className="mt-10 mx-9 md:ml-64">
      <h1 className="text-[1.75rem] font-semibold">
        My Courses{" "}
        <span className="text-lg text-blue-600">( Spring 2024 )</span>
      </h1>
      <div className="my-8 grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-8">
        {courses.map((course, id) => (
          <Card
            key={id}
            className="rounded-none md:w-auto shadow-[20px_20px_30px_rgba(0,0,0,0.15),0px_20px_30px_rgba(0,0,0,0.15)]"
          >
            <CardHeader
              style={{
                backgroundImage: 'url("/bgCourse.jpg")',
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className="text-white px-6 py-3"
            >
              <CardTitle className="text-xl font-semibold truncate">
                {course.title}
              </CardTitle>
              <CardDescription className="text-white">
                {course.description}
                <p className="mt-1">{course.creditHour}</p>
              </CardDescription>
            </CardHeader>
            <CardContent className="flex gap-12 py-3 border-b border-slate-200">
              <div>
                <img
                  className="box-border align-middle min-h-[8.5rem] min-w-24 h-[8.5rem] w-28 border border-slate-200 p-[3px] rounded-md cursor-pointer"
                  src={instructor}
                />
              </div>
              <div className="flex flex-col items-start text-[11px] py-3">
                <p className="font-medium">Mr. Imran Hussain</p>
                <p>MSc Business Information Technology</p>
                <p>University of Paisley, UK</p>
              </div>
            </CardContent>
            <CardFooter className="flex items-center flex-wrap gap-x-8 gap-y-2 pt-3">
              {cardFooter.map((data, id) => (
                <div
                  key={id}
                  className="flex flex-col items-center justify-center flex-wrap gap-2"
                >
                  <span className="size-10 cursor-pointer delay-75 hover:scale-110 transition-all lg:size-9">
                    {data.icon}
                  </span>
                  <span className="text-[10px] font-bold">{data.title}</span>
                </div>
              ))}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Courses;
