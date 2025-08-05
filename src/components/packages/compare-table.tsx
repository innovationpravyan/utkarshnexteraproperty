'use client';

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Check, X } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { PackageComparisonData } from "@/lib/constants";

interface CompareTableProps {
    data: PackageComparisonData;
}

export default function CompareTable({ data }: CompareTableProps) {
    const packages = Object.keys(data.features[0].packages);

    return (
        <Card>
            <CardContent className="p-0">
                <div className="overflow-x-auto">
                    <Table className="min-w-full divide-y divide-border">
                        <TableHeader className="bg-muted/50">
                            <TableRow>
                                <TableHead className="w-1/3 px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider sticky left-0 bg-muted/50 z-10">
                                    Features
                                </TableHead>
                                {packages.map(pkgName => (
                                    <TableHead key={pkgName} className="w-1/6 px-6 py-3 text-center text-xs font-medium text-muted-foreground uppercase tracking-wider">
                                        {pkgName}
                                    </TableHead>
                                ))}
                            </TableRow>
                        </TableHeader>
                        <TableBody className="bg-white divide-y divide-border">
                            {data.features.map((feature, idx) => (
                                <TableRow key={idx}>
                                    <TableCell className="px-6 py-4 whitespace-nowrap text-sm font-medium text-foreground sticky left-0 bg-white z-10">
                                        {feature.feature}
                                    </TableCell>
                                    {packages.map(pkgName => {
                                        const value = feature.packages[pkgName as keyof typeof feature.packages];
                                        return (
                                            <TableCell key={pkgName} className="px-6 py-4 whitespace-pre-wrap text-sm text-muted-foreground text-center">
                                                {typeof value === 'boolean' ? (
                                                    value ? <Check className="h-5 w-5 text-green-500 mx-auto" /> : <X className="h-5 w-5 text-destructive mx-auto" />
                                                ) : (
                                                    value
                                                )}
                                            </TableCell>
                                        );
                                    })}
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </CardContent>
        </Card>
    );
}
