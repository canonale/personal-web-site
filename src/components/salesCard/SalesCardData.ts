export interface SalesCardData {
  name: string;
  bullets: Array<string>;
  price: number;
  featured: boolean;
}

export const FREE_TEXT = "FREE";
export const PRINCING_TEXT = "€/hour";
export const FEATURED_TEXT = "save";
export const FEATURED_PRECENTAGE = "8%";

export const salesCardData: Array<SalesCardData> = [
  {
    name: "Astronaut",
    price: 42,
    featured: true,
    bullets: [
      "Unlimited projects",
      "Full-stack developer focus on agile best practices.",
      "Technical teams and projects management. ",
      "DevOps tools, automated tasks and IaC",
      "Business hours support",
    ],
  },
];
