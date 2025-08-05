import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is the typical timeline for a construction project?",
    answer: "The timeline for a construction project varies greatly depending on the scope and complexity. A standard home renovation might take 3-6 months, while a new custom home construction can take anywhere from 12 to 18 months. We provide a detailed project schedule before we begin."
  },
  {
    question: "How do you ensure the quality of materials and workmanship?",
    answer: "We have a rigorous quality assurance process. We source materials from trusted suppliers who meet our high standards, and our construction team consists of skilled, experienced professionals. Regular site inspections are conducted by our project managers to ensure top-notch workmanship."
  },
  {
    question: "Can I make changes to the project after construction has started?",
    answer: "Yes, you can make changes. We use a formal change order process to document any modifications. This ensures that you are aware of how the change will affect the project's timeline and budget before you approve it."
  },
  {
    question: "How is the project budget managed?",
    answer: "We provide a detailed and transparent budget at the outset. All costs are tracked meticulously, and we provide regular financial updates. Any potential changes to the budget are communicated and approved by you in advance, so there are no surprises."
  }
];

export default function ProjectFAQ() {
  return (
    <div className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-headline font-bold text-foreground md:text-4xl">Project FAQs</h2>
          <p className="mt-2 text-lg text-muted-foreground max-w-2xl mx-auto">
            Your questions about our construction process, answered.
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-lg font-semibold text-left">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}
