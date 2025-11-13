import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Wallet, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

export const WalletConnect = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [address, setAddress] = useState("");

  const handleConnect = () => {
    // Simulate wallet connection
    const mockAddress = "0x" + Math.random().toString(16).substring(2, 42);
    setAddress(mockAddress);
    setIsConnected(true);
    toast.success("Rainbow Wallet connected successfully");
  };

  const handleDisconnect = () => {
    setIsConnected(false);
    setAddress("");
    toast.info("Wallet disconnected");
  };

  return (
    <Card className="p-6 bg-gradient-card border-border/50">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-secondary/10 rounded-lg">
            <Wallet className="w-6 h-6 text-secondary" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground">Rainbow Wallet</h3>
            <p className="text-sm text-muted-foreground">
              {isConnected ? "Connected" : "Not connected"}
            </p>
          </div>
        </div>
        {isConnected && (
          <CheckCircle2 className="w-6 h-6 text-secure" />
        )}
      </div>
      
      {isConnected && (
        <div className="mb-4 p-3 bg-muted rounded-lg">
          <p className="text-xs text-muted-foreground mb-1">Connected Address</p>
          <p className="text-sm font-mono text-foreground break-all">{address}</p>
        </div>
      )}

      <Button
        onClick={isConnected ? handleDisconnect : handleConnect}
        variant={isConnected ? "outline" : "default"}
        className="w-full"
      >
        {isConnected ? "Disconnect Wallet" : "Connect Rainbow Wallet"}
      </Button>
    </Card>
  );
};
