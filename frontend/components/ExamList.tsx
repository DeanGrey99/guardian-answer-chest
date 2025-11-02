"use client";

import { Card } from "@/components/ui/card";
import { FileText } from "lucide-react";

export const ExamList = () => {
  return (
    <Card className="p-8 bg-gradient-card border-border/50 shadow-float">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-secondary/10 rounded-lg">
          <FileText className="w-6 h-6 text-secondary" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-foreground">My Submissions</h2>
          <p className="text-sm text-muted-foreground">
            View and decrypt your exam submissions
          </p>
        </div>
      </div>

      <div className="text-center py-12">
        <p className="text-muted-foreground">
          No submissions yet. Submit your first exam to see it here.
        </p>
      </div>
    </Card>
  );
};
