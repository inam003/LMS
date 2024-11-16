import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { supabase } from "../../lib/supabase";
import { toast } from "@/hooks/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const steps = [
  { title: "Personal Information", fields: ["fullName", "email", "phone"] },
  {
    title: "Educational Background",
    fields: ["previousEducation", "desiredProgram"],
  },
  { title: "Document Upload", fields: ["documents"] },
];

const programs = [
  { value: "cs", label: "Computer Science" },
  { value: "engineering", label: "Engineering" },
  { value: "business", label: "Business Administration" },
  { value: "medicine", label: "Medicine" },
  { value: "law", label: "Law" },
];

export const AdmissionPortal = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields },
    setValue,
    watch,
  } = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      previousEducation: "",
      desiredProgram: "",
      studentPicture: null,
      matricResult: null,
      interResult: null,
    },
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      // First create auth user
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email: data.email,
        password: "temporary-password", // This will be changed after admin approval
      });

      if (authError) throw authError;

      // Upload student picture
      const { data: pictureData, error: pictureError } = await supabase.storage
        .from("admission-documents")
        .upload(
          `${authData.user.id}/picture/${data.studentPicture[0].name}`,
          data.studentPicture[0]
        );

      if (pictureError) throw pictureError;

      // Upload matric result
      const { data: matricData, error: matricError } = await supabase.storage
        .from("admission-documents")
        .upload(
          `${authData.user.id}/matric/${data.matricResult[0].name}`,
          data.matricResult[0]
        );

      if (matricError) throw matricError;

      // Upload inter result
      const { data: interData, error: interError } = await supabase.storage
        .from("admission-documents")
        .upload(
          `${authData.user.id}/inter/${data.interResult[0].name}`,
          data.interResult[0]
        );

      if (interError) throw interError;

      // Create admission application
      const { error: applicationError } = await supabase
        .from("admission_applications")
        .insert([
          {
            user_id: authData.user.id,
            full_name: data.fullName,
            email: data.email,
            phone: data.phone,
            previous_education: data.previousEducation,
            desired_program: data.desiredProgram,
            student_picture_url: pictureData.path,
            matric_result_url: matricData.path,
            inter_result_url: interData.path,
            status: "pending",
          },
        ]);

      if (applicationError) throw applicationError;

      toast({
        title: "Application Submitted",
        description:
          "Your application has been submitted successfully. Please check your email for further instructions.",
        variant: "success",
      });
    } catch (error) {
      console.error("Error:", error);
      toast({
        title: "Error",
        description: "Failed to submit application. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-20 px-8">
      {/* Header */}
      <div className="bg-blue-600 fixed top-0 left-0 right-0 py-8 px-4 shadow-md">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-white text-center">
            University Admission Portal
          </h1>
          <p className="mt-2 text-blue-100 text-center max-w-3xl mx-auto">
            Take the first step towards your future. Apply now for admission to
            our prestigious programs.
          </p>
        </div>
      </div>

      <Card className="max-w-4xl mx-auto mt-24">
        <CardHeader>
          <CardTitle>Admission Application</CardTitle>
          <CardDescription>
            Step {currentStep + 1} of {steps.length}: {steps[currentStep].title}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Progress
            value={((currentStep + 1) / steps.length) * 100}
            className={`mb-6 ${
              currentStep === 0
                ? "bg-blue-100 [&>div]:bg-blue-500"
                : currentStep === 1
                ? "bg-orange-100 [&>div]:bg-orange-500"
                : "bg-green-100 [&>div]:bg-green-500"
            }`}
          />
          <form id="admissionForm" onSubmit={handleSubmit(onSubmit)}>
            {currentStep === 0 && (
              <div className="space-y-4">
                <div>
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input
                    id="fullName"
                    {...register("fullName", {
                      required: "Full name is required",
                    })}
                    placeholder="Enter your full name"
                  />
                  {errors.fullName && (
                    <p className="text-sm text-red-500 mt-1">
                      {errors.fullName.message}
                    </p>
                  )}
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      },
                    })}
                    placeholder="Enter your email address"
                  />
                  {errors.email && (
                    <p className="text-sm text-red-500 mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    {...register("phone", {
                      required: "Phone number is required",
                    })}
                    placeholder="Enter your phone number"
                  />
                  {errors.phone && (
                    <p className="text-sm text-red-500 mt-1">
                      {errors.phone.message}
                    </p>
                  )}
                </div>
              </div>
            )}

            {currentStep === 1 && (
              <div className="space-y-4">
                <div>
                  <Label htmlFor="previousEducation">Previous Education</Label>
                  <Textarea
                    id="previousEducation"
                    {...register("previousEducation", {
                      required: "Previous education details are required",
                    })}
                    placeholder="Describe your educational background"
                    rows={4}
                  />
                  {errors.previousEducation && (
                    <p className="text-sm text-red-500 mt-1">
                      {errors.previousEducation.message}
                    </p>
                  )}
                </div>
                <div>
                  <Label htmlFor="desiredProgram">Desired Program</Label>
                  <Select
                    onValueChange={(value) => setValue("desiredProgram", value)}
                    defaultValue={watch("desiredProgram")}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select a program" />
                    </SelectTrigger>
                    <SelectContent>
                      {programs.map((program) => (
                        <SelectItem key={program.value} value={program.value}>
                          {program.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.desiredProgram && (
                    <p className="text-sm text-red-500 mt-1">
                      {errors.desiredProgram.message}
                    </p>
                  )}
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div className="space-y-6">
                <div>
                  <Label htmlFor="studentPicture">Passport Size Picture</Label>
                  <p className="text-sm text-gray-500 mb-2">
                    Please upload a recent passport-sized photograph (JPEG/PNG
                    format)
                  </p>
                  <Input
                    id="studentPicture"
                    type="file"
                    accept="image/jpeg,image/png"
                    {...register("studentPicture", {
                      required: "Passport size picture is required",
                      validate: (value) => {
                        if (touchedFields.studentPicture && !value?.[0]) {
                          return "Passport size picture is required";
                        }
                        return true;
                      },
                    })}
                    className="mt-1"
                  />
                  {touchedFields.studentPicture && errors.studentPicture && (
                    <p className="text-sm text-red-500 mt-1">
                      {errors.studentPicture.message}
                    </p>
                  )}
                </div>

                <div>
                  <Label htmlFor="matricResult">Matric Result Card</Label>
                  <p className="text-sm text-gray-500 mb-2">
                    Upload your Matriculation result card (PDF format)
                  </p>
                  <Input
                    id="matricResult"
                    type="file"
                    accept=".pdf"
                    {...register("matricResult", {
                      required: "Matric result card is required",
                      validate: (value) => {
                        if (touchedFields.matricResult && !value?.[0]) {
                          return "Matric result card is required";
                        }
                        return true;
                      },
                    })}
                    className="mt-1"
                  />
                  {touchedFields.matricResult && errors.matricResult && (
                    <p className="text-sm text-red-500 mt-1">
                      {errors.matricResult.message}
                    </p>
                  )}
                </div>

                <div>
                  <Label htmlFor="interResult">Intermediate Result Card</Label>
                  <p className="text-sm text-gray-500 mb-2">
                    Upload your Intermediate result card (PDF format)
                  </p>
                  <Input
                    id="interResult"
                    type="file"
                    accept=".pdf"
                    {...register("interResult", {
                      required: "Inter result card is required",
                      validate: (value) => {
                        if (touchedFields.interResult && !value?.[0]) {
                          return "Inter result card is required";
                        }
                        return true;
                      },
                    })}
                    className="mt-1"
                  />
                  {touchedFields.interResult && errors.interResult && (
                    <p className="text-sm text-red-500 mt-1">
                      {errors.interResult.message}
                    </p>
                  )}
                </div>
              </div>
            )}
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button
            variant="outline"
            onClick={prevStep}
            disabled={currentStep === 0}
            className="rounded-full"
          >
            Previous
          </Button>
          {currentStep < steps.length - 1 ? (
            <Button
              onClick={nextStep}
              className={
                currentStep === 0
                  ? "bg-blue-500 hover:bg-blue-600 rounded-full"
                  : currentStep === 1
                  ? "bg-orange-500 hover:bg-orange-600 rounded-full"
                  : "bg-green-500 hover:bg-green-600 rounded-full"
              }
            >
              Next
            </Button>
          ) : (
            <Button
              type="submit"
              form="admissionForm"
              disabled={isSubmitting}
              className="bg-green-600 hover:bg-green-700 rounded-full"
            >
              {isSubmitting ? "Submitting..." : "Submit Application"}
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  );
};
