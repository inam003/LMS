import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export const CreateQuizForm = ({ onSubmit }) => {
  const [quizTitle, setQuizTitle] = useState("");
  const [quizStatus, setQuizStatus] = useState("draft");
  const [questions, setQuestions] = useState([]);
  const [selectedQuestionCount, setSelectedQuestionCount] = useState(null);

  const handleQuestionChange = (index, field, value) => {
    const newQuestions = [...questions];
    if (field === "options") {
      newQuestions[index].options = value;
    } else {
      newQuestions[index][field] = value;
    }
    setQuestions(newQuestions);
  };

  const handleSelectQuestionCount = (count) => {
    setSelectedQuestionCount(count);
    setQuestions(
      Array(count).fill({
        question: "",
        options: ["", "", "", ""],
        correctAnswer: 0,
      })
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      title: quizTitle,
      status: quizStatus,
      questions,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="quizTitle">Quiz Title</Label>
        <Input
          id="quizTitle"
          value={quizTitle}
          onChange={(e) => setQuizTitle(e.target.value)}
          required
        />
      </div>
      <div className="space-y-2">
        <Label>Quiz Status</Label>
        <RadioGroup
          value={quizStatus}
          onValueChange={(value) => setQuizStatus(value)}
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="draft" id="draft" />
            <Label htmlFor="draft">Draft</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="published" id="published" />
            <Label htmlFor="published">Published</Label>
          </div>
        </RadioGroup>
      </div>
      <div className="space-y-2">
        <Label>Number of Questions</Label>
        <div className="flex space-x-2">
          <Button
            type="button"
            onClick={() => handleSelectQuestionCount(5)}
            variant={selectedQuestionCount === 5 ? "default" : "outline"}
          >
            5 Questions
          </Button>
          <Button
            type="button"
            onClick={() => handleSelectQuestionCount(10)}
            variant={selectedQuestionCount === 10 ? "default" : "outline"}
          >
            10 Questions
          </Button>
          <Button
            type="button"
            onClick={() => handleSelectQuestionCount(15)}
            variant={selectedQuestionCount === 15 ? "default" : "outline"}
          >
            15 Questions
          </Button>
        </div>
      </div>
      {questions.map((question, index) => (
        <div key={index} className="space-y-2">
          <Label>Question {index + 1}</Label>
          <Input
            value={question.question}
            onChange={(e) =>
              handleQuestionChange(index, "question", e.target.value)
            }
            required
          />
          <Label>Options</Label>
          {question.options.map((option, optionIndex) => (
            <Input
              key={optionIndex}
              value={option}
              onChange={(e) =>
                handleQuestionChange(index, "options", [
                  ...question.options.slice(0, optionIndex),
                  e.target.value,
                  ...question.options.slice(optionIndex + 1),
                ])
              }
              required
            />
          ))}
        </div>
      ))}
      <Button type="submit" disabled={questions.length === 0}>
        Create Quiz
      </Button>
    </form>
  );
};
