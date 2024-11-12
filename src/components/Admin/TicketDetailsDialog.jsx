import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";

export const TicketDetailsDialog = ({ isOpen, onClose, ticket, onReply }) => {
  const [replyText, setReplyText] = useState("");
  const [dialogState, setDialogState] = useState("details");

  const handleReplySubmit = () => {
    onReply(replyText);
    setDialogState("confirmation");
  };

  const handleClose = () => {
    setReplyText("");
    setDialogState("details");
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[425px]">
        {dialogState === "details" ? (
          <>
            <DialogHeader>
              <DialogTitle>Ticket Details</DialogTitle>
              <DialogDescription>
                View and respond to the support ticket.
              </DialogDescription>
            </DialogHeader>
            {ticket && (
              <div className="py-4">
                <h4 className="text-sm font-medium">
                  Subject: {ticket.subject}
                </h4>
                <p className="text-sm text-muted-foreground mt-1">
                  From: {ticket.user}
                </p>
                <p className="text-sm text-muted-foreground">
                  Status: {ticket.status}
                </p>
                <p className="text-sm text-muted-foreground">
                  Priority: {ticket.priority}
                </p>
                <p className="text-sm text-muted-foreground">
                  Created: {ticket.createdAt}
                </p>
                <Textarea
                  className="mt-4"
                  placeholder="Type your reply here..."
                  value={replyText}
                  onChange={(e) => setReplyText(e.target.value)}
                />
              </div>
            )}
            <DialogFooter>
              <Button type="submit" onClick={handleReplySubmit}>
                Send Reply
              </Button>
            </DialogFooter>
          </>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle>Reply Sent</DialogTitle>
              <DialogDescription>
                Your reply has been successfully sent.
              </DialogDescription>
            </DialogHeader>
            <div className="py-4">
              <p className="text-sm text-muted-foreground">
                Subject: {ticket?.subject}
              </p>
              <p className="text-sm text-muted-foreground">
                Replied to: {ticket?.user}
              </p>
            </div>
            <DialogFooter>
              <Button type="button" onClick={handleClose}>
                Close
              </Button>
            </DialogFooter>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};
