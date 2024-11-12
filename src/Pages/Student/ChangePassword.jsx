import React from "react";
import { Button } from "@/components/ui/button";

const ChangePassword = () => {
  return (
    <div className="mt-10 mx-9 md:ml-64">
      <h1 className="text-[1.75rem] font-semibold">
        Change Password (Make it Responsive)
      </h1>
      <div className="bg-white my-8 px-8 py-8 w-full rounded-lg">
        <div className="flex flex-col items-center justify-center gap-3">
          <div className="flex items-center gap-5">
            <p>Old Password</p>
            <input
              className="border border-slate-200 rounded-md text-gray-400 font-normal px-2 py-1 w-[38rem]"
              type="password"
              name="password"
              id="password"
              placeholder="Enter Old Password"
            />
          </div>
          <div className="flex items-center gap-3">
            <p>New Password</p>
            <input
              className="border border-slate-200 rounded-md text-gray-400 font-normal px-2 py-1 w-[38rem]"
              type="new-password"
              name="new-password"
              id="new-password"
              placeholder="Enter New Password"
            />
          </div>
        </div>
        <div className="mx-60 my-4">
          <Button className="px-6">Save</Button>
        </div>
        <div className="flex flex-col text-[#36a3f7] mt-12">
          <p>Valid Password:</p>
          <p>Password length must be minimum 8 and maximum 13 characters</p>
          <p>Password must have at least 1 lower character</p>
          <p>Password must have at least 1 upper character</p>
          <p>Password must have at least 1 numeric character</p>
          <p>Password must have at least 1 special character</p>
          <p>
            Password should not have these special character ( &#39; &quot;
            &amp; &#43; &#63; &lt; &gt; )
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
