export type FloorPlan = {
    id: number;
    title: string;
    imageUrl: string;
    aiHint: string;
    likes: number;
    type: "Residential" | "Commercial";
    dimensions: string;
    area: number;
    cost: number;
    floors: string;
    bedrooms: string;
    vastu: boolean;
};

export const floorPlansData: FloorPlan[] = [
    {
        id: 1,
        title: "Modern Apartment Complex",
        imageUrl: "/floor/2.jpg",
        aiHint: "3d apartment building",
        likes: 40,
        type: "Residential",
        dimensions: "30x40 sq.ft",
        area: 1200,
        cost: 8218102,
        floors: "G+4",
        bedrooms: "11",
        vastu: true,
    },
    {
        id: 2,
        title: "Compact Urban House",
        imageUrl: "/floor/3.jpg",
        aiHint: "3d small house",
        likes: 32,
        type: "Residential",
        dimensions: "20x30 sq.ft",
        area: 600,
        cost: 15964406,
        floors: "G+3",
        bedrooms: "2",
        vastu: false,
    },
    {
        id: 3,
        title: "Spacious Duplex",
        imageUrl: "/floor/1.jpg",
        aiHint: "3d duplex house",
        likes: 55,
        type: "Residential",
        dimensions: "40x60 sq.ft",
        area: 2400,
        cost: 12050000,
        floors: "G+1",
        bedrooms: "4",
        vastu: true,
    },
    {
        id: 4,
        title: "Suburban Villa",
        imageUrl: "/floor/4.jpg",
        aiHint: "3d suburban villa",
        likes: 78,
        type: "Residential",
        dimensions: "50x80 sq.ft",
        area: 4000,
        cost: 25000000,
        floors: "G+2",
        bedrooms: "5",
        vastu: true,
    },
    {
        id: 5,
        title: "Small Office Building",
        imageUrl: "/floor/5.jpg",
        aiHint: "3d office building",
        likes: 21,
        type: "Commercial",
        dimensions: "60x40 sq.ft",
        area: 2400,
        cost: 18000000,
        floors: "G+3",
        bedrooms: "N/A",
        vastu: false,
    },
    {
        id: 6,
        title: "Luxury Penthouse",
        imageUrl: "/floor/6.jpg",
        aiHint: "3d luxury penthouse",
        likes: 99,
        type: "Residential",
        dimensions: "30x50 sq.ft",
        area: 1500,
        cost: 32000000,
        floors: "1",
        bedrooms: "3",
        vastu: true,
    },
];