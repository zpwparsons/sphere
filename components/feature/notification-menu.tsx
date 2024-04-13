import { Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import React from "react";

export default function NotificationMenu(): React.JSX.Element {
    return (
        <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
            <span className="sr-only">Toggle notifications</span>
        </Button>
    );
}
