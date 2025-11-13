import { Logo } from "@/components/Logo";
import { FloatingLocks } from "@/components/FloatingLocks";
import { WalletConnect } from "@/components/WalletConnect";
import { ExamSubmission } from "@/components/ExamSubmission";
import { GradeTimeline } from "@/components/GradeTimeline";
import { Shield, Lock, Clock } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <FloatingLocks />
      
      {/* Header */}
      <header className="relative z-10 border-b border-border/50 bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <Logo />
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secure/10 border border-secure/20 rounded-full mb-6">
            <Shield className="w-4 h-4 text-secure" />
            <span className="text-sm font-medium text-secure">Blockchain-Powered Security</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent">
            Integrity Through Encryption
          </h1>
          
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Submit exam answers with confidence. Every submission is encrypted, timestamped, 
            and stored on-chain for complete transparency and anti-cheating protection.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {[
              {
                icon: Lock,
                title: "Encrypted Submissions",
                description: "End-to-end encryption ensures answer security"
              },
              {
                icon: Clock,
                title: "Timestamped Proof",
                description: "Blockchain timestamps verify submission time"
              },
              {
                icon: Shield,
                title: "Transparent Process",
                description: "Full visibility for students and teachers"
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-gradient-card rounded-lg border border-border/50 shadow-float hover:shadow-xl transition-shadow"
              >
                <feature.icon className="w-10 h-10 text-primary mb-4 mx-auto" />
                <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="relative z-10 py-12 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-5 gap-8">
            <div className="md:col-span-2">
              <WalletConnect />
            </div>
            <div className="md:col-span-3">
              <ExamSubmission />
            </div>
          </div>
        </div>
      </section>

      {/* Footer with Timeline */}
      <footer className="relative z-10 mt-20">
        <GradeTimeline />
        <div className="bg-primary text-primary-foreground py-6">
          <div className="container mx-auto px-4 text-center">
            <p className="text-sm">
              © 2025 ExamVault. Securing academic integrity through blockchain technology.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
