import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Lock, Upload, FileText } from "lucide-react";
import { toast } from "sonner";

export const ExamSubmission = () => {
  const [examTitle, setExamTitle] = useState("");
  const [answer, setAnswer] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    if (!examTitle || !answer) {
      toast.error("Please fill in all fields");
      return;
    }

    setIsSubmitting(true);
    
    // Simulate encryption and blockchain submission
    setTimeout(() => {
      const timestamp = new Date().toISOString();
      toast.success("Exam submitted successfully", {
        description: `Encrypted and timestamped: ${timestamp}`,
      });
      setIsSubmitting(false);
      setExamTitle("");
      setAnswer("");
    }, 2000);
  };

  return (
    <Card className="p-8 bg-gradient-card border-border/50 shadow-float">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-primary/10 rounded-lg">
          <FileText className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-foreground">Submit Exam</h2>
          <p className="text-sm text-muted-foreground">
            Your answers will be encrypted and timestamped on-chain
          </p>
        </div>
      </div>

      <div className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="exam-title">Exam Title</Label>
          <Input
            id="exam-title"
            placeholder="e.g., Mathematics Final - Chapter 5"
            value={examTitle}
            onChange={(e) => setExamTitle(e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="answer">Your Answer</Label>
          <Textarea
            id="answer"
            placeholder="Enter your exam answers here..."
            className="min-h-[300px] resize-none"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
          />
        </div>

        <div className="flex items-center gap-2 p-4 bg-secure/10 border border-secure/20 rounded-lg">
          <Lock className="w-5 h-5 text-secure animate-lock-glow" />
          <p className="text-sm text-foreground">
            <span className="font-semibold">End-to-end encrypted</span> - Your answers are secured with blockchain technology
          </p>
        </div>

        <Button
          onClick={handleSubmit}
          disabled={isSubmitting}
          className="w-full"
          size="lg"
        >
          {isSubmitting ? (
            <>
              <Lock className="w-4 h-4 mr-2 animate-spin" />
              Encrypting & Submitting...
            </>
          ) : (
            <>
              <Upload className="w-4 h-4 mr-2" />
              Submit Exam
            </>
          )}
        </Button>
      </div>
    </Card>
  );
};
