"use client";
import { ChevronLeft, ChevronDown, ChevronUp, Check } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MembershipData } from "@/app/member/data";
import Link from "next/link";

export default function MembershipDetail({ id }: { id: number }) {
  const [expanded, setExpanded] = useState(false);

  const member = MembershipData[id - 1];

  const faqs = [
    {
      question: "Can I cancel my membership at any time?",
      answer:
        "Yes, you can cancel your membership at any time. Your access will continue until the end of your current billing cycle.",
    },
    {
      question: "Is there a free trial available?",
      answer:
        "We offer a 7-day free trial for new members. You can explore all features during this period.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, and Apple Pay.",
    },
  ];

  return (
    <>
      {member ? (
        <div className="min-h-screen bg-gray-100">
          <header className="bg-white shadow-sm">
            <div className="max-w-3xl mx-auto px-4 py-4 flex items-center">
              <Link href={"/member"} className="flex items-center gap-3">
                <ChevronLeft size={18} />
                <h2 className=" font-semibold">Back</h2>
              </Link>
            </div>
          </header>

          <main className="max-w-3xl mx-auto px-4 py-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-bold text-blue-700">
                  {member.title} Membership
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <p className=" text-xl md:text-2xl font-bold mb-2">
                    MMK {member.price}
                    <span className="text-lg font-normal text-gray-600">
                      {" "}
                      / month
                    </span>
                  </p>
                  <p className="text-sm text-gray-600">
                    Billed monthly. Cancel anytime.
                  </p>
                </div>
                <div className="space-y-2">
                  {member.benefits
                    .slice(0, expanded ? member.benefits.length : 3)
                    .map((feature, index) => (
                      <div key={index} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                        <p>{feature}</p>
                      </div>
                    ))}
                </div>
                {member.benefits.length > 3 && (
                  <Button
                    variant="link"
                    onClick={() => setExpanded(!expanded)}
                    className="mt-2 p-0 h-auto font-normal"
                  >
                    {expanded ? (
                      <>
                        <ChevronUp className="h-4 w-4 mr-1" />
                        Show less
                      </>
                    ) : (
                      <>
                        <ChevronDown className="h-4 w-4 mr-1" />
                        Show all {member.benefits.length} features
                      </>
                    )}
                  </Button>
                )}
              </CardContent>
            </Card>

            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-4">
                Frequently Asked Questions
              </h2>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </main>
        </div>
      ) : null}
    </>
  );
}
