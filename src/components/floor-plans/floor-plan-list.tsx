// The floor plan list now receives filtered plans as a prop to display the correct results.

'use client';

import { motion, AnimatePresence } from "framer-motion";
import type { FloorPlan } from "@/lib/floor-plans-data";
import FloorPlanCard from "./floor-plan-card";

export default function FloorPlanList({ plans }: { plans: FloorPlan[] }) {
    return (
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
            <AnimatePresence>
                {plans.length > 0 ? (
                    plans.map(plan => (
                        <FloorPlanCard key={plan.id} plan={plan} />
                    ))
                ) : (
                    <p className="col-span-full text-center text-muted-foreground">No floor plans match the selected filters.</p>
                )}
            </AnimatePresence>
        </motion.div>
    );
}