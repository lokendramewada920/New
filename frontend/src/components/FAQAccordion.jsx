import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";

const FAQAccordion = ({ items, idPrefix = "faq" }) => (
  <Accordion type="single" collapsible className="w-full space-y-3">
    {items.map((f, i) => (
      <AccordionItem
        key={i}
        value={`${idPrefix}-${i}`}
        className="rounded-xl border border-slate-800 bg-ink-900/60 px-5 transition-colors duration-300 data-[state=open]:border-bull/30"
      >
        <AccordionTrigger
          data-testid={`${idPrefix}-question-${i}`}
          className="py-5 text-left font-heading text-sm font-semibold text-white hover:text-bull hover:no-underline lg:text-base"
        >
          {f.q}
        </AccordionTrigger>
        <AccordionContent data-testid={`${idPrefix}-answer-${i}`} className="pb-5 text-sm leading-relaxed text-slate-400">
          {f.a}
        </AccordionContent>
      </AccordionItem>
    ))}
  </Accordion>
);

export default FAQAccordion;
