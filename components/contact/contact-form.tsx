"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { FormField } from "@/components/contact/form-field";
import { contactFormSchema } from "@/lib/validations/contact";
import type { z } from "zod";

type FormData = z.infer<typeof contactFormSchema>;

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useForm<FormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      // TODO: Implement EmailJS integration
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast.success("Message sent successfully!");
      form.reset();
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
      <FormField
        placeholder="Your Name"
        register={form.register("name")}
        error={form.formState.errors.name?.message}
      />

      <FormField
        type="email"
        placeholder="Email Address"
        register={form.register("email")}
        error={form.formState.errors.email?.message}
      />

      <FormField
        placeholder="Subject"
        register={form.register("subject")}
        error={form.formState.errors.subject?.message}
      />

      <FormField
        type="textarea"
        placeholder="Your Message"
        register={form.register("message")}
        error={form.formState.errors.message?.message}
      />

      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}