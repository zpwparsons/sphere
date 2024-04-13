import Link from "next/link";
import { Cloud, FileText, Home, Package, ShoppingCart, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import React from "react";

export default function DesktopNavigation(): React.JSX.Element {
    return (
        <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
            <Link
                href="/dashboard"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
            >
                <Home className="h-4 w-4"/>
                Dashboard
            </Link>
            <Link
                href="/clients"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
            >
                <Users className="h-4 w-4"/>
                Clients
            </Link>
            <Link
                href="/orders"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
            >
                <ShoppingCart className="h-4 w-4"/>
                Orders
                <Badge
                    className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                    6
                </Badge>
            </Link>
            <Link
                href="/products"
                className="flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary transition-all hover:text-primary"
            >
                <Package className="h-4 w-4"/>
                Products
            </Link>
            <Link
                href="/invoices"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
            >
                <FileText className="h-4 w-4"/>
                Invoices
            </Link>
            <Link
                href="/files"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
            >
                <Cloud className="h-4 w-4"/>
                Files
            </Link>
        </nav>
    );
}
