import { useState } from "react";
import Image from "next/image";
import arrow from "../../../../public/images/arrow.svg";

const Syllabus = () => {
  return (
    <div className="text-black">
      <h1 className="font-sans text-4xl">Syllabus</h1>
      <nav className="font-body pt-6 text-3xl">
        <ul className="flex flex-col space-y-2">
          <li className="hover:text-gray-400 delay-150 w-max">Description</li>
          <li className="hover:text-gray-400 delay-150 w-max">Details</li>
          <li className="hover:text-gray-400 delay-150 w-max">
            Topics Covered
          </li>
          <li className="hover:text-gray-400 delay-150 w-max">Schedule</li>
          <li className="hover:text-gray-400 delay-150 w-max">Checkpoints</li>
          <li className="hover:text-gray-400 delay-150 w-max">Final Project</li>
          <li className="hover:text-gray-400 delay-150 w-max">Grading</li>
          <li className="hover:text-gray-400 delay-150 w-max">Late Policy</li>
          <li className="hover:text-gray-400 delay-150 w-max">
            Class Participation
          </li>
          <li className="hover:text-gray-400 delay-150 w-max">Fair Use</li>
          <li className="hover:text-gray-400 delay-150 w-max">Feedback</li>
          <li className="hover:text-gray-400 delay-150 w-max">Other Admin</li>
        </ul>
      </nav>
      <div className="absolute left-[10.5rem] bottom-6 animate-bounce">
        <Image
          className="rotate-90 w-10"
          src={arrow}
          alt="White arrow pointing down"
        />
      </div>
    </div>
  );
};

export default Syllabus;
