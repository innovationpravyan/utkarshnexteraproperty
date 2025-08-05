// A new component for displaying a single floor plan card with detailed information.

import Image from "next/image";
import { ThumbsUp, Share2, Square, IndianRupee, Building, Bed } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { FloorPlan } from "@/lib/floor-plans-data";

export default function FloorPlanCard({ plan }: { plan: FloorPlan }) {
    return (
        <Card className="overflow-hidden group transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl w-full">
            <div className="relative aspect-video bg-muted">
                <Image
                    src={plan.imageUrl}
                    alt={plan.title}
                    layout="fill"
                    objectFit="contain"
                    className="p-4"
                    data-ai-hint={plan.aiHint}
                />
                <div className="absolute top-3 right-3 flex items-center gap-2">
                    <Button variant="outline" size="icon" className="bg-white/80 backdrop-blur-sm rounded-full h-8 w-8">
                        <Share2 className="h-4 w-4" />
                    </Button>
                </div>
                <div className="absolute bottom-3 left-3">
                    <Badge variant="outline" className="bg-white/80 backdrop-blur-sm">
                        <ThumbsUp className="h-4 w-4 mr-2" />
                        {plan.likes}
                    </Badge>
                </div>
            </div>
            <CardContent className="p-4 space-y-3">
                <Badge variant="secondary">{plan.type}</Badge>
                <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                        <Square className="h-4 w-4 text-primary" />
                        <span>{plan.dimensions}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <IndianRupee className="h-4 w-4 text-primary" />
                        <span>{plan.cost.toLocaleString('en-IN')}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Building className="h-4 w-4 text-primary" />
                        <span>{plan.floors}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Bed className="h-4 w-4 text-primary" />
                        <span>{plan.bedrooms} BHK</span>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
