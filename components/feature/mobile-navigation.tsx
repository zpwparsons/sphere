import Link from "next/link";
import { Cloud, FileText, Globe, Home, Package, ShoppingCart, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import React from "react";

export default function MobileNavigation(): React.JSX.Element {
    return (
        <nav className="grid gap-2 text-lg font-medium">
            <Link
                href="#"
                className="flex items-center gap-2 text-lg font-semibold"
            >
                <Globe className="h-6 w-6"/>
                <span className="sr-only">Sphere</span>
            </Link>
            <Link
                href="/dashboard"
                className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
            >
                <Home className="h-5 w-5"/>
                Dashboard
            </Link>
            <Link
                href="/clients"
                className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
            >
                <Users className="h-5 w-5"/>
                Clients
            </Link>
            <Link
                href="/orders"
                className="mx-[-0.65rem] flex items-center gap-4 rounded-xl bg-muted px-3 py-2 text-foreground hover:text-foreground"
            >
                <ShoppingCart className="h-5 w-5"/>
                Orders
                <Badge
                    className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                    6
                </Badge>
            </Link>
            <Link
                href="/products"
                className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
            >
                <Package className="h-5 w-5"/>
                Products
            </Link>
            <Link
                href="/invoices"
                className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
            >
                <FileText className="h-5 w-5"/>
                Invoices
            </Link>
            <Link
                href="/files"
                className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
            >
                <Cloud className="h-5 w-5"/>
                Invoices
            </Link>
        </nav>
    );
}
